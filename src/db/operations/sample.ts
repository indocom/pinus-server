import { Error } from "sequelize";

import { Sample, SampleInstance, SampleCreationAttributes, SampleAttributes } from "../models";
import { SequelizePromise, handleSequelizePromise } from "../util";

export {
  SampleAttributes as Attributes,
  SampleCreationAttributes as CreationAttributes,
  SampleInstance as Instance,
} from "../models";

type SamplePromise = SequelizePromise<SampleInstance>;
type SamplesPromise = SequelizePromise<SampleInstance[]>;

export async function getSampleById(id: number): SamplePromise {
  const [result, err] = await handleSequelizePromise(Sample.findByPk(id));

  if (err) {
    return [undefined, err];
  }

  if (result === null) {
    return [undefined, new Error(`Instance with ID ${id} not found`)];
  }

  return [result as SampleInstance, undefined];
}

export async function getSamples(limit = 100, offset = 0): SamplesPromise {
  const [result, err] = await handleSequelizePromise(Sample.findAll({ limit, offset }));

  if (err) {
    return [undefined, err];
  }

  return [result as SampleInstance[], undefined];
}

export async function createSample(data: SampleCreationAttributes): SamplePromise {
  const [result, err] = await handleSequelizePromise(Sample.create(data));

  if (err) {
    return [undefined, err];
  }

  return [result as SampleInstance, undefined];
}

export async function updateSample(id: number, updateData: Partial<SampleAttributes>): SamplePromise {
  const [result, err] = await handleSequelizePromise(
    Sample.update(updateData, { where: { id }, returning: true })
  );

  if (err) {
    return [undefined, err];
  }

  const [count, samples] = result as [number, SampleInstance[]];

  if (count === 0) {
    return [undefined, new Error(`Instance with ${id} not found`)];
  }

  const [sample] = samples;

  return [sample, undefined];
}

export async function deleteSample(id: number): SamplePromise {
  const [result, getSampleErr] = await getSampleById(id);

  if (getSampleErr) {
    return [undefined, getSampleErr];
  }

  const sample = result as SampleInstance;
  sample.destroy();

  return [result, undefined];
}
