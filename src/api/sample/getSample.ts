import { Request, Response } from "express";

import { db } from "../../db/models";
import { SampleInstance } from "../../db/models/sample";

interface GetSampleResponse {
  success: boolean;
  data?: SampleInstance;
  error?: {
    message: string;
    detail?: string;
  };
}

export async function getSample(req: Request, res: Response): Promise<void> {
  const respData: GetSampleResponse = { success: false };
  const error = { message: "", detail: "" };

  const { id } = req.params;

  try {
    const row = await db.models.Sample.findByPk(id);

    if (row === null) {
      error.message = "Item not found";
      respData.error = error;

      res.send(respData);
      return;
    }

    respData.success = true;
    respData.data = row as SampleInstance;

    res.send(respData);
  } catch (err) {
    error.message = "Database error";
    error.detail = err.message;
    respData.error = error;

    res.send(respData);
  }
}
