import firebase from "firebase";
import * as admin from "firebase-admin";

import { getVar } from "../utils";

export interface FirebaseConfig {
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

export function initFirebaseConfig(onProduction: boolean): FirebaseConfig {
  const adminCredentials = onProduction
    ? JSON.parse(Buffer.from(getVar("FIREBASE_ADMIN_CREDENTIALS", onProduction), "base64").toString("ascii"))
    : {};

  const config: FirebaseConfig = {
    // Production only
    projectId: getVar("FIREBASE_PROJECT_ID", onProduction),
    appId: getVar("FIREBASE_APP_ID", onProduction),
    apiKey: getVar("FIREBASE_API_KEY", onProduction),
    senderId: getVar("FIREBASE_SENDER_ID", onProduction),
    measurementId: getVar("FIREBASE_MEASUREMENT_ID", onProduction),
    adminCredentials,
    // Development only
    authEmulatorHost: getVar("FIREBASE_AUTH_EMULATOR_HOST", !onProduction),
  };

  return config;
}

export function initFirebase(config: FirebaseConfig, onProduction: boolean): void {
  return onProduction ? initProductionFirebase(config) : initDevelopmentFirebase(config);
}

function initDevelopmentFirebase(config: FirebaseConfig): void {
  firebase.initializeApp({ apiKey: config.apiKey });
  firebase.auth().useEmulator(`http://${config.authEmulatorHost}`);

  admin.initializeApp({ projectId: "pinus-server-dev" });
}

function initProductionFirebase(config: FirebaseConfig): void {
  firebase.initializeApp({
    apiKey: config.apiKey,
    authDomain: `${config.projectId}.firebaseapp.com`,
    projectId: config.projectId,
    storageBucket: `${config.projectId}.appspot.com`,
    messagingSenderId: config.senderId,
    appId: config.appId,
    measurementId: config.measurementId,
  });

  admin.initializeApp({
    credential: admin.credential.cert(config.adminCredentials),
  });
}
