export class BaseError {
  code: string;
  message: string;

  constructor(code: string, message: string) {
    this.code = code;
    this.message = message;
  }
}

export class DatabaseError extends BaseError {
  constructor(code: string, message: string) {
    super(`db/${code}`, message);
  }
}

export class FirebaseError extends BaseError {
  constructor(code: string, message: string) {
    super(`firebase/${code}`, message);
  }
}
