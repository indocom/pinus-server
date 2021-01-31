import { Request, Response } from "express";

import { db } from "../../db/models";
import { SampleInstance } from "../../db/models/sample";

interface CreateSampleResponse {
  success: boolean;
  data?: SampleInstance;
  error?: {
    message: string;
    detail: string;
  };
}

export async function createSample(req: Request, res: Response): Promise<void> {
  const respData: CreateSampleResponse = { success: false };
  const error = { message: "", detail: "" };

  const data = req.body;

  try {
    const fields = {
      name: data.name,
      value: data.value,
    };

    const row = await db.models.Sample.create(fields);

    respData.success = true;
    respData.data = row as SampleInstance;

    res.send(respData);
  } catch (err) {
    error.message = "Operation failed: Database error";
    error.detail = err.message;
    respData.error = error;

    res.send(respData);
  }
}
