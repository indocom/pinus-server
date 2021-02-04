import { auth } from "firebase-admin";

import { FirebasePromise, handleFirebasePromise } from "./util";

// Interfaces

export interface FirebaseUser {
  uid: string;
  displayName: string;
  email: string;
}

interface FirebaseUserCreationData {
  displayName: string;
  email: string;
  password: string;
}

type FirebaseUserPromise = FirebasePromise<FirebaseUser>;
type FirebaseUsersPromise = FirebasePromise<FirebaseUser[]>;

// Operations

export async function createUser(data: FirebaseUserCreationData): FirebaseUserPromise {
  const [record, err] = await handleFirebasePromise(auth().createUser(data));

  if (err) {
    return [undefined, err];
  }

  const user = collectFirebaseUserData(record as auth.UserRecord);

  return [user, undefined];
}

export async function getUsers(maxResults?: number): FirebaseUsersPromise {
  const [result, err] = await handleFirebasePromise(auth().listUsers(maxResults));

  if (err) {
    return [undefined, err];
  }

  const records = (result as auth.ListUsersResult).users;
  const users = records.map(collectFirebaseUserData);

  return [users, undefined];
}

export async function getUserByUid(uid: string): FirebaseUserPromise {
  const [record, err] = await handleFirebasePromise(auth().getUser(uid));

  if (err) {
    return [undefined, err];
  }

  const user = collectFirebaseUserData(record as auth.UserRecord);

  return [user, undefined];
}

interface FirebaseUserUpdateData {
  displayName?: string;
  email?: string;
  password?: string;
}

export async function updateUser(uid: string, data: FirebaseUserUpdateData): FirebaseUserPromise {
  const [record, err] = await handleFirebasePromise(auth().updateUser(uid, data));

  if (err) {
    return [undefined, err];
  }

  const user = collectFirebaseUserData(record as auth.UserRecord);

  return [user, undefined];
}

export async function deleteUser(uid: string): FirebaseUserPromise {
  const [user, getUserErr] = await getUserByUid(uid);

  if (getUserErr) {
    return [undefined, getUserErr];
  }

  const [, deleteUserErr] = await handleFirebasePromise(auth().deleteUser(uid));

  if (deleteUserErr) {
    return [undefined, deleteUserErr];
  }

  return [user, undefined];
}

// Helpers

function collectFirebaseUserData(record: auth.UserRecord): FirebaseUser {
  const user: FirebaseUser = {
    uid: record.uid,
    displayName: record.displayName as string,
    email: record.email as string,
  };

  return user;
}
