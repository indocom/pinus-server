import { ApiResponse } from "../response";
import { HeartbeatService } from "../../services";

/**
 * @openapi
 * components:
 *  schemas:
 *    HeartbeatResponse:
 *      allOf:
 *        - $ref: '#/components/schemas/ApiResponse'
 *        - properties:
 *            data:
 *              $ref: '#/components/schemas/HeartbeatData'
 */
type HeartbeatResponse = ApiResponse<HeartbeatService.HeartbeatData>;

/**
 * @openapi
 * components:
 *  schemas:
 *    HeartbeatApiResponse:
 *      $ref: '#/components/schemas/HeartbeatResponse'
 */
export type HeartbeatApiResponse = HeartbeatResponse;

/**
 * @openapi
 * components:
 *  schemas:
 *    DbHeartbeatApiResponse:
 *      $ref: '#/components/schemas/HeartbeatResponse'
 */
export type DbHeartbeatApiResponse = HeartbeatResponse;
