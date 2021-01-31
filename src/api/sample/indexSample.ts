import { Request, Response } from "express";

import { db } from "../../db/models";
import { SampleInstance } from "../../db/models/sample";

interface IndexSampleResponse {
  success: boolean;
  data?: SampleInstance[];
  error?: {
    message: string;
    detail: string;
  };
}

export async function indexSample(req: Request, res: Response): Promise<void> {
  const respData: IndexSampleResponse = { success: false };

  try {
    const rows = await db.models.Sample.findAll();

    respData.success = true;
    respData.data = rows as SampleInstance[];

    res.send(respData);
  } catch (err) {
    respData.error = {
      message: "Operation failed: Database error",
      detail: err.message,
    };

    res.send(respData);
  }
}
