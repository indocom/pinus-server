import { RequestHandler } from "express";

import { IndexSampleApiResponse } from "./types";
import { BaseError } from "../error";
import { SampleService } from "../../services";

export const indexSample: RequestHandler = async (req, res) => {
  const response: IndexSampleApiResponse = { success: false };

  const { rawLimit, rawOffset } = req.query;

  const limit = rawLimit instanceof String ? parseInt(rawLimit as string, 10) : undefined;
  const offset = rawOffset instanceof String ? parseInt(rawOffset as string, 10) : undefined;

  const indexReq: SampleService.IndexSampleRequest = { limit, offset };
  const [samples, err] = await SampleService.indexSample(indexReq);

  if (err) {
    response.error = new BaseError(err.code, err.message);
    return res.send(response);
  }

  response.success = true;
  response.data = samples as SampleService.Sample[];
  return res.send(response);
};
