import { RequestHandler } from "express";

import { HeartbeatApiResponse } from "./types";
import { BaseError } from "../error";

import { HeartbeatService } from "@services";

export const getApiHeartbeat: RequestHandler = async (req, res) => {
  const response: HeartbeatApiResponse = { success: false };

  const [data, err] = await HeartbeatService.getApiHeartbeat();

  if (err) {
    response.error = new BaseError(err.code, err.message);
    res.send(response);
  }

  response.success = true;
  response.data = data as HeartbeatService.HeartbeatData;
  return res.send(response);
};
