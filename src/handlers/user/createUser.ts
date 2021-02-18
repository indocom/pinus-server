import { RequestHandler } from "express";

import { ApiResponse } from "../response";
import { BadRequestError, BaseError } from "../error";

import { UserService } from "@services";

export const createUser: RequestHandler = async (req, res) => {
  const response: ApiResponse<UserService.User> = { success: false };

  const { displayName, email, password } = req.body;

  if (!displayName) {
    response.error = new BadRequestError("Display name should not be empty");
    return res.send(response);
  }

  if (!email) {
    response.error = new BadRequestError("Email should not be empty");
    return res.send(response);
  }

  if (!password) {
    response.error = new BadRequestError("Password should not be empty");
    return res.send(response);
  }

  const createReq: UserService.CreateUserRequest = { displayName, email, password };
  const [user, err] = await UserService.createUser(createReq);

  if (err) {
    response.error = new BaseError(err.code, err.message);
    return res.send(response);
  }

  response.success = true;
  response.data = user as UserService.User;
  return res.send(response);
};
