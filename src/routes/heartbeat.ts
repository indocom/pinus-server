import express from "express";

import { Heartbeat } from "../handlers";

const heartbeatRouter = express.Router();

heartbeatRouter.get("/", Heartbeat.getApiHeartbeat);
heartbeatRouter.get("/db", Heartbeat.getDbHeartbeat);

export default heartbeatRouter;
