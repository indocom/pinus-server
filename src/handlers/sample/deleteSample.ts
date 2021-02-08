import { RequestHandler } from "express";

import { ApiResponse } from "../response";
import { BadRequestError, BaseError } from "../error";

import { SampleService } from "../../services";

export const deleteSample: RequestHandler = async (req, res) => {
  const response: ApiResponse<SampleService.Sample> = { success: false };

  const id = parseInt(req.params.id, 10);
  if (id === NaN) {
    response.error = new BadRequestError("ID is not a number");
    return res.send(response);
  }

  const deleteReq: SampleService.DeleteSampleRequest = { id };
  const [result, err] = await SampleService.deleteSample(deleteReq);

  if (err) {
    response.error = new BaseError(err.code, err.message);
    return res.send(response);
  }

  response.success = true;
  response.data = result as SampleService.Sample;
  return res.send(response);
};
