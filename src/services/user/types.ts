import { ServicePromise } from "../promise";

import { FirebaseUser } from "../../firebase";

/**
 * @openapi
 * components:
 *  schemas:
 *    User:
 *      $ref: '#/components/schemas/FirebaseUser'
 */
export type User = FirebaseUser.Instance;

/**
 * @openapi
 * components:
 *  schemas:
 *    UserCreationData:
 *      $ref: '#/components/schemas/FirebaseUserCreationData'
 */

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
