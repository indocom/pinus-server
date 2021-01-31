import { Request, Response } from "express";
import { db } from "../../db/models";

interface DbHeartbeatResponse {
  success: boolean;
  data?: {
    status: string;
  };
  error?: {
    message?: string;
    detail?: string;
  };
}

export async function getDbHeartbeat(req: Request, res: Response): Promise<void> {
  const respData: DbHeartbeatResponse = { success: false };
  const error = { message: "", detail: "" };

  try {
    await db.sequelize.authenticate();
    respData.success = true;
    respData.data = { status: "OK" };

    res.send(respData);
  } catch (err) {
    error.message = "Unable to connect to the database";
    error.detail = err.message;
    respData.error = error;

    res.send(respData);
  }
}
