import * as T from "./types";
import { DatabaseError } from "../error";

import { Sample } from "../../db";

export async function indexSample(req: T.IndexSampleRequest): T.IndexSampleResponse {
  const [result, err] = await Sample.getSamples(req.limit, req.offset);

  if (err) {
    return [undefined, new DatabaseError(err.name, err.message)];
  }

  return [result as T.Sample[], undefined];
}

export async function getSample(req: T.GetSampleRequest): T.GetSampleResponse {
  const [result, err] = await Sample.getSampleById(req.id);

  if (err) {
    return [undefined, new DatabaseError(err.name, err.message)];
  }

  return [result as T.Sample, undefined];
}

export async function createSample(req: T.CreateSampleRequest): T.CreateSampleResponse {
  const [result, err] = await Sample.createSample(req);

  if (err) {
    return [undefined, new DatabaseError(err.name, err.message)];
  }

  return [result as T.Sample, undefined];
}

export async function updateSample(req: T.UpdateSampleRequest): T.UpdateSampleResponse {
  const [result, err] = await Sample.updateSample(req.id, req.data);

  if (err) {
    return [undefined, new DatabaseError(err.name, err.message)];
  }

  return [result as T.Sample, undefined];
}

export async function deleteSample(req: T.DeleteSampleRequest): T.DeleteSampleResponse {
  const [result, err] = await Sample.deleteSample(req.id);

  if (err) {
    return [undefined, new DatabaseError(err.name, err.message)];
  }

  return [result as T.Sample, undefined];
}
