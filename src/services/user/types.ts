import { ServicePromise } from "../promise";

import { FirebaseUser } from "../../firebase";

export type User = FirebaseUser.Instance;

type UserPromise = ServicePromise<User>;
type UsersPromise = ServicePromise<User[]>;

export interface IndexUserRequest {
  limit?: number;
}

export type IndexUserResponse = UsersPromise;

export interface GetUserRequest {
  uid: string;
}

export type GetUserResponse = UserPromise;

export type CreateUserRequest = FirebaseUser.CreationData;

export type CreateUserResponse = UserPromise;

export interface UpdateUserRequest {
  uid: string;
  data: Partial<FirebaseUser.CreationData>;
}

export type UpdateUserResponse = UserPromise;

export interface DeleteUserRequest {
  uid: string;
}

export type DeleteUserResponse = UserPromise;
