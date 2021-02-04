import firebase from "firebase";
import * as admin from "firebase-admin";

import config from "../config";

export function initFirebase(): void {
  // Non-production initialization
  if (process.env.NODE_ENV !== "production") {
    firebase.initializeApp({ apiKey: config.firebase.apiKey });
    firebase.auth().useEmulator(`http://${config.firebase.authEmulatorHost}`);

    admin.initializeApp({ projectId: "pinus-server-dev" });
    return;
  }

  // Production initialization
  firebase.initializeApp({
    apiKey: config.firebase.apiKey,
    authDomain: `${config.firebase.projectId}.firebaseapp.com`,
    projectId: config.firebase.projectId,
    storageBucket: `${config.firebase.projectId}.appspot.com`,
    messagingSenderId: config.firebase.senderId,
    appId: config.firebase.appId,
    measurementId: config.firebase.measurementId,
  });

  admin.initializeApp({
    credential: admin.credential.cert(config.firebase.adminCredentials),
  });
}
