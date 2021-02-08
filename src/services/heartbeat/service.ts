import * as T from "./types";

import { Connection } from "../../db";
import { DatabaseError } from "../error";

export async function getApiHeartbeat(): T.GetApiHeartbeatResponse {
  const data: T.HeartbeatData = {
    status: "UP",
    detail: "API is OK",
  };

  return [data, undefined];
}

export async function getDbHeartbeat(): T.GetDbHeartbeatResponse {
  const data: T.HeartbeatData = { status: "DOWN" };

  const [, err] = await Connection.checkConnection();

  if (err) {
    return [undefined, new DatabaseError(err.name, err.message)];
  }

  data.status = "UP";
  data.detail = "Database is OK";
  return [data, undefined];
}
