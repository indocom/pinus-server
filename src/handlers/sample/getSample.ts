import { RequestHandler } from "express";

import { GetSampleApiResponse } from "./types";
import { BadRequestError, BaseError } from "../error";

import { SampleService } from "../../services";

export const getSample: RequestHandler = async (req, res) => {
  const response: GetSampleApiResponse = { success: false };

  const id = parseInt(req.params.id, 10);
  if (id === NaN) {
    response.error = new BadRequestError("ID is not a number");
    return res.send(response);
  }

  const getReq: SampleService.GetSampleRequest = { id };
  const [sample, err] = await SampleService.getSample(getReq);

  if (err) {
    response.error = new BaseError(err.code, err.message);
    return res.send(response);
  }

  response.success = true;
  response.data = sample as SampleService.Sample;
  return res.send(response);
};
