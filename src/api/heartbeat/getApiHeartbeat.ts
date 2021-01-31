import { Request, Response } from "express";

interface ApiHeartbeatResponse {
  success: boolean;
  data?: {
    status: string;
  };
  error?: {
    message: string;
    detail: string;
  };
}

export function getApiHeartbeat(req: Request, res: Response): void {
  const respData: ApiHeartbeatResponse = {
    success: true,
    data: {
      status: "API is OK",
    },
  };

  res.json(respData);
}
