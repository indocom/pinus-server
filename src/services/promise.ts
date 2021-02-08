import { BaseError } from "./error";

export type ServicePromise<T> = Promise<[T?, BaseError?]>;
