/**
 * @openapi
 * components:
 *  schemas:
 *    BaseError:
 *      type: object
 *      properties:
 *        code:
 *          type: string
 *        message:
 *          type: string
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
