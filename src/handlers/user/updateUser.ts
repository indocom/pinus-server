import { RequestHandler } from "express";

import { ApiResponse } from "../response";
import { BaseError } from "../error";
import { UserService } from "@services";

export const updateUser: RequestHandler = async (req, res) => {
  const response: ApiResponse<UserService.User> = { success: false };

  const { uid } = req.params;
  const { displayName, email, password } = req.body;

  const updateReq: UserService.UpdateUserRequest = { uid, data: { displayName, email, password } };
  const [user, err] = await UserService.updateUser(updateReq);

  if (err) {
    response.error = new BaseError(err.code, err.message);
    return res.send(response);
  }

  response.success = true;
  response.data = user as UserService.User;
  return res.send(response);
};
