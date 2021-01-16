import express from "express";

import heartbeatRouter from "./heartbeat";

const apiRouter = express.Router();

apiRouter.use("/heartbeat", heartbeatRouter);

apiRouter.get("/", (req: express.Request, res: express.Response) => {
  res.send("Backend is running");
});

export default apiRouter;
