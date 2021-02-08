import { ServicePromise } from "../promise";

import { Sample } from "../../db";

export type Sample = Sample.Instance;

type SamplePromise = ServicePromise<Sample>;
type SamplesPromise = ServicePromise<Sample[]>;

export interface IndexSampleRequest {
  limit?: number;
  offset?: number;
}

export type IndexSampleResponse = SamplesPromise;

export interface GetSampleRequest {
  id: number;
}

export type GetSampleResponse = SamplePromise;

export type CreateSampleRequest = Sample.CreationAttributes;

export type CreateSampleResponse = SamplePromise;

export interface UpdateSampleRequest {
  id: number;
  data: Partial<Sample.Attributes>;
}

export type UpdateSampleResponse = SamplePromise;

export interface DeleteSampleRequest {
  id: number;
}

export type DeleteSampleResponse = SamplePromise;
