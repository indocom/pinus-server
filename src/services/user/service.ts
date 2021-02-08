import * as T from "./types";
import { FirebaseError } from "../error";

import { FirebaseUser } from "../../firebase";

export async function indexUser(req: T.IndexUserRequest): T.IndexUserResponse {
  const [users, err] = await FirebaseUser.getUsers(req.limit);

  if (err) {
    return [undefined, new FirebaseError(err.code, err.message)];
  }

  return [users as T.User[], undefined];
}

export async function getUser(req: T.GetUserRequest): T.GetUserResponse {
  const [user, err] = await FirebaseUser.getUserByUid(req.uid);

  if (err) {
    return [undefined, new FirebaseError(err.code, err.message)];
  }

  return [user as T.User, undefined];
}

export async function createUser(req: T.CreateUserRequest): T.CreateUserResponse {
  const [user, err] = await FirebaseUser.createUser(req);

  if (err) {
    return [undefined, new FirebaseError(err.code, err.message)];
  }

  return [user as T.User, undefined];
}

export async function updateUser(req: T.UpdateUserRequest): T.UpdateUserResponse {
  const [user, err] = await FirebaseUser.updateUser(req.uid, req.data);

  if (err) {
    return [undefined, new FirebaseError(err.code, err.message)];
  }

  return [user as T.User, undefined];
}

export async function deleteUser(req: T.DeleteUserRequest): T.DeleteUserResponse {
  const [user, err] = await FirebaseUser.deleteUser(req.uid);

  if (err) {
    return [undefined, new FirebaseError(err.code, err.message)];
  }

  return [user as T.User, undefined];
}
