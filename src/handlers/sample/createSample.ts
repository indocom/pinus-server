import { RequestHandler } from "express";

import { CreateSampleApiResponse } from "./types";
import { BadRequestError, BaseError } from "../error";
import { SampleService } from "../../services";

export const createSample: RequestHandler = async (req, res) => {
  const response: CreateSampleApiResponse = { success: false };

  const { name, rawValue } = req.body;
  if (!name) {
    response.error = new BadRequestError("Name should not be empty");
    return res.send(response);
  }

  if (!rawValue) {
    response.error = new BadRequestError("Value should not be empty");
    return res.send(response);
  }

  const value = parseInt(rawValue, 10);
  if (value === NaN) {
    response.error = new BadRequestError("Value is not a number");
    return res.send(response);
  }

  const createReq: SampleService.CreateSampleRequest = { name, value };
  const [result, err] = await SampleService.createSample(createReq);

  if (err) {
    response.error = new BaseError(err.code, err.message);
    return res.send(response);
  }

  response.success = true;
  response.data = result as SampleService.Sample;
  return res.send(response);
};
