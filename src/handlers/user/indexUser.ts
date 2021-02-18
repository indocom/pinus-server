import { RequestHandler } from "express";

import { ApiResponse } from "../response";
import { BaseError } from "../error";
import { UserService } from "@services";

export const indexUser: RequestHandler = async (req, res) => {
  const response: ApiResponse<UserService.User[]> = { success: false };

  const { rawLimit } = req.body;
  const limit = rawLimit instanceof String ? parseInt(rawLimit as string, 10) : undefined;

  const getReq: UserService.IndexUserRequest = { limit };
  const [users, err] = await UserService.indexUser(getReq);

  if (err) {
    response.error = new BaseError(err.code, err.message);
    return res.send(response);
  }

  response.success = true;
  response.data = users as UserService.User[];
  return res.send(response);
};
