import { RequestHandler } from "express";

import { ApiResponse } from "../response";
import { BaseError } from "../error";

import { UserService } from "@services";

export const getUser: RequestHandler = async (req, res) => {
  const response: ApiResponse<UserService.User> = { success: false };

  const { uid } = req.params;

  const getReq: UserService.GetUserRequest = { uid };
  const [user, err] = await UserService.getUser(getReq);

  if (err) {
    response.error = new BaseError(err.code, err.message);
    return res.send(response);
  }

  response.success = true;
  response.data = user as UserService.User;
  return res.send(response);
};
