import { Request, Response } from "express";
import db from "../../db/models";

interface DbHeartbeatResponse {
  success: boolean;
  data?: {
    status: string;
  };
  error?: string;
  errorDetail?: string;
}

export async function getDbHeartbeat(req: Request, res: Response): Promise<void> {
  const respData: DbHeartbeatResponse = { success: false };

  try {
    await db.sequelize.authenticate();
    respData.success = true;
    respData.data = { status: "OK" };

    res.send(respData);
  } catch (err) {
    respData.error = "Unable to connect to the database";
    respData.errorDetail = err.message;

    res.send(respData);
  }
}
