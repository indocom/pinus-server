import { Request, Response } from "express";

import { db } from "../../db/models";
import { SampleInstance } from "../../db/models/sample";

interface DeleteSampleResponse {
  success: boolean;
  data?: SampleInstance;
  error?: {
    message: string;
    detail: string;
  };
}

export async function deleteSample(req: Request, res: Response): Promise<void> {
  const respData: DeleteSampleResponse = { success: false };
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

    await db.models.Sample.destroy({ where: { id } });

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
