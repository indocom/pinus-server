import { Error } from "sequelize";

import { handlePromise } from "../utils";

export type SequelizePromise<T> = Promise<[T?, Error?]>;

export async function handleSequelizePromise<T>(promise: Promise<T>): SequelizePromise<T> {
  return handlePromise<T, Error>(promise);
}
