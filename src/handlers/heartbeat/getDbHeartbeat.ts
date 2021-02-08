import { RequestHandler } from "express";

import { ApiResponse } from "../response";
import { BaseError } from "../error";

import { HeartbeatService } from "../../services";

export const getDbHeartbeat: RequestHandler = async (req, res) => {
  const response: ApiResponse<HeartbeatService.HeartbeatData> = { success: false };

  const [data, err] = await HeartbeatService.getDbHeartbeat();

  if (err) {
    response.error = new BaseError(err.code, err.message);
    return res.send(response);
  }

  response.success = true;
  response.data = data as HeartbeatService.HeartbeatData;
  return res.send(response);
};
