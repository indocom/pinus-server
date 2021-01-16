import { Request, Response } from "express";

import db from "../../db"; // TODO: Try to get away from the "relative path hell"

interface DbHeartbeatResponse {
  success: boolean;
  message?: string;
}

export function getDbHeartbeat(req: Request, res: Response): void {
  const respData: DbHeartbeatResponse = { success: false };

  db.connect()
    .then((obj) => {
      obj.done();
      respData.success = true;
      respData.message = "Database is OK";
      res.json(respData);
    })
    .catch((error) => {
      respData.success = true;
      respData.message = `ERROR: ${error.message || error}`;
      res.json(respData);
    });
}
