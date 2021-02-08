import { ApiError } from "./error";

/**
 * Base interface for API responses.
 *
 * An API response has a boolean `success` property, which
 * indicates whether the operation is successfully processed.
 *
 * On success, the response must specify the `data` property.
 *
 * On error, the response must specify the `error` property.
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
}
