import express from "express";

import { indexSample } from "./indexSample";
import { createSample } from "./createSample";
import { getSample } from "./getSample";
import { updateSample } from "./updateSample";
import { deleteSample } from "./deleteSample";

const sampleDbRouter = express.Router();

sampleDbRouter.get("/", indexSample);
sampleDbRouter.post("/", createSample);
sampleDbRouter.get("/:id", getSample);
sampleDbRouter.put("/:id", updateSample);
sampleDbRouter.delete("/:id", deleteSample);

export default sampleDbRouter;
