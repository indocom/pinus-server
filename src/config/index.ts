import dotenv from "dotenv";
import path from "path";

import { getVar } from "./util";

interface Config {
  firebase: FirebaseConfig;
}

interface FirebaseConfig {
  // Production only
  projectId: string;
  appId: string;
  apiKey: string;
  senderId: string;
  measurementId: string;
  adminCredentials: Record<string, unknown>;
  // Development only
  authEmulatorHost: string;
}

const onProduction = process.env.NODE_ENV === "production";

if (!onProduction) {
  dotenv.config({ path: path.resolve(__dirname, "../../.env") });
}

const adminCredentials = onProduction
  ? JSON.parse(Buffer.from(getVar("FIREBASE_ADMIN_CREDENTIALS", onProduction), "base64").toString("ascii"))
  : {};

const config: Config = {
  firebase: {
    // Production only
    projectId: getVar("FIREBASE_PROJECT_ID", onProduction),
    appId: getVar("FIREBASE_APP_ID", onProduction),
    apiKey: getVar("FIREBASE_API_KEY", onProduction),
    senderId: getVar("FIREBASE_SENDER_ID", onProduction),
    measurementId: getVar("FIREBASE_MEASUREMENT_ID", onProduction),
    adminCredentials,
    // Development only
    authEmulatorHost: getVar("FIREBASE_AUTH_EMULATOR_HOST", !onProduction),
  },
};

export default config;
