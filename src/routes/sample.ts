import express from "express";

import { Sample } from "../handlers";

const sampleDbRouter = express.Router();

sampleDbRouter.get("/", Sample.indexSample);
sampleDbRouter.post("/", Sample.createSample);
sampleDbRouter.get("/:id", Sample.getSample);
sampleDbRouter.put("/:id", Sample.updateSample);
sampleDbRouter.delete("/:id", Sample.deleteSample);

export default sampleDbRouter;
