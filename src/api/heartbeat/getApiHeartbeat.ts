import { Request, Response } from "express";

interface ApiHeartbeatResponse {
  success: boolean;
  message?: string;
}

export function getApiHeartbeat(req: Request, res: Response): void {
  const respData: ApiHeartbeatResponse = {
    success: true,
    message: "API is OK",
  };

  res.json(respData);
}
