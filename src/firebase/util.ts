import { FirebaseError } from "firebase-admin";

import { handlePromise } from "../util/promise";

export type FirebasePromise<T> = Promise<[T?, FirebaseError?]>;

export async function handleFirebasePromise<T>(promise: Promise<T>): FirebasePromise<T> {
  return handlePromise<T, FirebaseError>(promise);
}
