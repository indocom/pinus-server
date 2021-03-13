import express from "express";
import cors from "cors";

import { initConfig } from "./config";
import { setupFirebase } from "./firebase";
import apiRouter from "./routes";

import { isOnProduction, getIntVar } from "@utils";

const onProduction = isOnProduction();

const config = initConfig(onProduction);
(async () => await setupFirebase(config.firebase, onProduction))();

const port = getIntVar("PORT", false, 8080);
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", apiRouter);

app.listen(port, () => console.log(`Backend listening at http://localhost:${port}`));
