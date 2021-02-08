/**
 * Base class for API errors.
 *
 * An error has the `code` property, which is a short-hand error code
 * for developers or to propagate through other means. Usually, this
 * is in the form of `layer/error-code`, e.g. `api/bad-request`.
 *
 * Errors also have the `message` property containing the details of
 * the error.
 */
export class BaseError {
  code: string;
  message: string;

  constructor(code: string, message: string) {
    this.code = code;
    this.message = message;
  }
}

export class ApiError extends BaseError {
  constructor(code: string, message: string) {
    super(`api/${code}`, message);
  }
}

export class BadRequestError extends ApiError {
  constructor(message: string) {
    super("bad-request", message);
  }
}
