import * as admin from "firebase-admin";

import { getVar } from "../utils";
import { clearSeed, seed } from "./seed";

export interface FirebaseConfig {
  adminCredentials: Record<string, unknown>;
}

export function initFirebaseConfig(onProduction: boolean): FirebaseConfig {
  const adminCredentials = onProduction
    ? JSON.parse(Buffer.from(getVar("FIREBASE_ADMIN_CREDENTIALS", onProduction), "base64").toString("ascii"))
    : {};

  const config: FirebaseConfig = {
    adminCredentials,
  };

  return config;
}

function initFirebase(config: FirebaseConfig, onProduction: boolean): void {
  if (onProduction) {
    admin.initializeApp({
      credential: admin.credential.cert(config.adminCredentials),
    });
  } else {
    admin.initializeApp({
      projectId: "pinus-server-dev",
    });
  }
}

export async function setupFirebase(config: FirebaseConfig, onProduction: boolean): Promise<void> {
  initFirebase(config, onProduction);

  if (!onProduction) {
    await clearSeed();
    await seed();
  }
}
