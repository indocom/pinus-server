import { ServicePromise } from "../promise";

/**
 * @openapi
 * components:
 *  schemas:
 *    HeartbeatData:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          values:
 *            - UP
 *            - DOWN
 *        detail:
 *          type: string
 */
export interface HeartbeatData {
  status: "UP" | "DOWN";
  detail?: string;
}

export type HeartbeatPromise = ServicePromise<HeartbeatData>;

export type GetApiHeartbeatResponse = HeartbeatPromise;

export type GetDbHeartbeatResponse = HeartbeatPromise;
