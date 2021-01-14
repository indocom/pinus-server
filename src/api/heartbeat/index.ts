import express from "express";

import { getApiHeartbeat } from "./getApiHeartbeat";
import { getDbHeartbeat } from "./getDbHeartbeat";

const heartbeatRouter = express.Router();

heartbeatRouter.get("/", getApiHeartbeat);
heartbeatRouter.get("/db", getDbHeartbeat);

export default heartbeatRouter;
