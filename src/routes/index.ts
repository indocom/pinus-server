import express, { Request, Response } from "express";

import heartbeatRouter from "./heartbeat";
import sampleDbRouter from "./sample";
import usersRouter from "./user";

const apiRouter = express.Router();

apiRouter.use("/heartbeat", heartbeatRouter);
apiRouter.use("/sample", sampleDbRouter);
apiRouter.use("/users", usersRouter);

apiRouter.get("/", (req: Request, res: Response) => {
  res.send("Backend is running");
});

export default apiRouter;
