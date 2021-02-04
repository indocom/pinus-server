import { Request, Response } from "express";

import {
  FirebaseUser,
  createUser as createFirebaseUser,
  getUsers as getFirebaseUsers,
  getUserByUid as getFirebaseUserByUid,
  updateUser as updateFirebaseUser,
  deleteUser as deleteFirebaseUser,
} from "../../firebase/user";

interface IndexUsersResponse {
  success: boolean;
  data?: FirebaseUser[];
  error?: {
    code: string;
    message: string;
  };
}

export async function indexUsers(req: Request, res: Response): Promise<void> {
  const respData: IndexUsersResponse = { success: false };
  const error = { code: "", message: "" };

  const { maxResults } = req.body;

  const [users, err] = await getFirebaseUsers(maxResults);

  if (err) {
    error.code = `firebase/${err.code}`;
    error.message = err.message;
    respData.error = error;
    res.send(respData);
    return;
  }

  respData.success = true;
  respData.data = users as FirebaseUser[];
  res.send(respData);
}

interface CreateUserResponse {
  success: boolean;
  data?: FirebaseUser;
  error?: {
    code: string;
    message: string;
  };
}

export async function createUser(req: Request, res: Response): Promise<void> {
  const respData: CreateUserResponse = { success: false };
  const error = { code: "", message: "" };

  const { displayName, email, password } = req.body;

  const [user, err] = await createFirebaseUser({ displayName, email, password });

  if (err) {
    error.code = `firebase/${err.code}`;
    error.message = err.message;
    respData.error = error;
    res.send(respData);
    return;
  }

  respData.success = true;
  respData.data = user as FirebaseUser;
  res.send(respData);
}

interface GetUserResponse {
  success: boolean;
  data?: FirebaseUser;
  error?: {
    code: string;
    message: string;
  };
}

export async function getUser(req: Request, res: Response): Promise<void> {
  const respData: GetUserResponse = { success: false };
  const error = { code: "", message: "" };

  const { uid } = req.params;

  const [user, err] = await getFirebaseUserByUid(uid);

  if (err) {
    error.code = `firebase/${err.code}`;
    error.message = err.message;
    respData.error = error;
    res.send(respData);
    return;
  }

  respData.success = true;
  respData.data = user;
  res.send(respData);
}

interface UpdateUserResponse {
  success: boolean;
  data?: FirebaseUser;
  error?: {
    code: string;
    message: string;
  };
}

export async function updateUser(req: Request, res: Response): Promise<void> {
  const respData: UpdateUserResponse = { success: false };
  const error = { code: "", message: "" };

  const { uid } = req.params;
  const { displayName, email, password } = req.body;

  const [user, err] = await updateFirebaseUser(uid, { displayName, email, password });

  if (err) {
    error.code = `firebase/${err.code}`;
    error.message = err.message;
    respData.error = error;
    res.send(respData);
    return;
  }

  respData.success = true;
  respData.data = user;
  res.send(respData);
}

interface DeleteUserResponse {
  success: boolean;
  data?: FirebaseUser;
  error?: {
    code: string;
    message: string;
  };
}

export async function deleteUser(req: Request, res: Response): Promise<void> {
  const respData: DeleteUserResponse = { success: false };
  const error = { code: "", message: "" };

  const { uid } = req.params;

  const [user, err] = await deleteFirebaseUser(uid);

  if (err) {
    error.code = `firebase/${err.code}`;
    error.message = err.message;
    respData.error = error;
    res.send(respData);
    return;
  }

  respData.success = true;
  respData.data = user as FirebaseUser;
  res.send(respData);
}
