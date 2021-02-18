import { RequestHandler } from "express";

import { UpdateSampleApiResponse } from "./types";
import { BadRequestError, BaseError } from "../error";
import { SampleService } from "@services";

export const updateSample: RequestHandler = async (req, res) => {
  const response: UpdateSampleApiResponse = { success: false };

  const id = parseInt(req.params.id, 10);
  if (id === NaN) {
    response.error = new BadRequestError("ID is not a number");
    return res.send(response);
  }

  const { name, value } = req.body;

  const updateReq: SampleService.UpdateSampleRequest = { id, data: { name, value } };
  const [sample, err] = await SampleService.updateSample(updateReq);

  if (err) {
    response.error = new BaseError(err.code, err.message);
    return res.send(response);
  }

  response.success = true;
  response.data = sample as SampleService.Sample;
  return res.send(response);
};
