import express from "express";

import heartbeatRouter from "./heartbeat";
import sampleDbRouter from "./sample";

const apiRouter = express.Router();

apiRouter.use("/heartbeat", heartbeatRouter);
apiRouter.use("/sample", sampleDbRouter);

apiRouter.get("/", (req: express.Request, res: express.Response) => {
  res.send("Backend is running");
});

export default apiRouter;
