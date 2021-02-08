import { auth } from "firebase-admin";

import { FirebaseUser, FirebaseUserCreationData } from "./model";
import { FirebasePromise, handleFirebasePromise, collectFirebaseUserData } from "./util";

export { FirebaseUser as Instance, FirebaseUserCreationData as CreationData } from "./model";

type FirebaseUserPromise = FirebasePromise<FirebaseUser>;
type FirebaseUsersPromise = FirebasePromise<FirebaseUser[]>;

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

export async function updateUser(uid: string, data: Partial<FirebaseUserCreationData>): FirebaseUserPromise {
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
