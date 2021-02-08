import { auth, FirebaseError } from "firebase-admin";

import { FirebaseUser } from "./model";
import { handlePromise } from "../utils";

export type FirebasePromise<T> = Promise<[T?, FirebaseError?]>;

export async function handleFirebasePromise<T>(promise: Promise<T>): FirebasePromise<T> {
  return handlePromise<T, FirebaseError>(promise);
}

export function collectFirebaseUserData(record: auth.UserRecord): FirebaseUser {
  const user: FirebaseUser = {
    uid: record.uid,
    displayName: record.displayName as string,
    email: record.email as string,
  };

  return user;
}
