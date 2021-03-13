import { RequestHandler } from "express";

import { AuthService } from "@services";
import { ApiResponse } from "@handlers/response";
import { BaseError, UnauthorizedError } from "@handlers/error";

import { isOnProduction } from "@utils";

export const ensureLoggedIn: RequestHandler = async (req, res, next) => {
  const respData: ApiResponse<never> = { success: false, error: new UnauthorizedError() };

  if (!req.headers.authorization) {
    return res.send(respData);
  }

  const [type, credentials] = req.headers.authorization.split(" ");
  if (type !== "Bearer") {
    return res.send(respData);
  }

  if (!credentials) {
    return res.send(respData);
  }

  const [result, err] = await AuthService.verifyIdToken(credentials);

  if (err) {
    if (!isOnProduction()) {
      console.log("Bypassing auth middleware...");
      res.locals.uid = credentials;
      return next();
    }

    respData.error = new BaseError(err.code, err.message);
    return res.send(respData);
  }

  res.locals.uid = result as string;
  return next();
};
