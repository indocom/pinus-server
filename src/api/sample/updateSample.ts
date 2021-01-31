import { Request, Response } from "express";

import { db } from "../../db/models";
import { SampleInstance } from "../../db/models/sample";

interface UpdateSampleResponse {
  success: boolean;
  data?: SampleInstance | null;
  error?: {
    message: string;
    detail: string;
  };
}

interface UpdateFields {
  name?: string;
  value?: number;
}

export async function updateSample(req: Request, res: Response): Promise<void> {
  const respData: UpdateSampleResponse = { success: false };
  const error = { message: "", detail: "" };

  const { id } = req.params;
  const { name, value } = req.body;

  try {
    const newValues: UpdateFields = {};
    if (name) {
      newValues.name = name;
    }

    if (value) {
      newValues.value = value;
    }

    const [count, rows] = await db.models.Sample.update(newValues, { where: { id }, returning: true });

    if (count === 0) {
      error.message = "Item not found";
      respData.error = error;

      res.send(respData);
      return;
    }

    const row = rows.shift() as SampleInstance;

    if (count > 1) {
      console.log(`WARN: Sample.update affects more than 1 row. Affected rows: ${count}`);
    }

    respData.success = true;
    respData.data = row;

    res.send(respData);
  } catch (err) {
    error.message = "Database error";
    error.detail = err.message;
    respData.error = error;

    res.send(respData);
  }
}
