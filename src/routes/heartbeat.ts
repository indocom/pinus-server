import express from "express";

import { Heartbeat } from "@handlers";

const heartbeatRouter = express.Router();

/**
 * @openapi
 * /heartbeat/:
 *  get:
 *    tags:
 *      - Heartbeat
 *    summary: Tests the API flow
 *    responses:
 *      200:
 *        description: Request is processed
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/HeartbeatApiResponse'
 */
heartbeatRouter.get("/", Heartbeat.getApiHeartbeat);

/**
 * @openapi
 * /heartbeat/db:
 *  get:
 *    tags:
 *      - Heartbeat
 *    summary: Tests the database connection
 *    responses:
 *      200:
 *        description: Request is processed
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/DbHeartbeatApiResponse'
 */
heartbeatRouter.get("/db", Heartbeat.getDbHeartbeat);

export default heartbeatRouter;
