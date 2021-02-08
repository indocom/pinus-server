import { ServicePromise } from "../promise";

export interface HeartbeatData {
  status: "UP" | "DOWN";
  detail?: string;
}

export type HeartbeatPromise = ServicePromise<HeartbeatData>;

export type GetApiHeartbeatResponse = HeartbeatPromise;

export type GetDbHeartbeatResponse = HeartbeatPromise;
