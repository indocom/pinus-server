import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { initConfig } from "./config";
import { initFirebase } from "./firebase";
import apiRouter from "./routes";

const onProduction = process.env.NODE_ENV === "production";

const config = initConfig(onProduction);
initFirebase(config.firebase, onProduction);

const port = process.env.PORT || 8080;
const app = express();

app.use(cors()); // TODO: Use reverse-proxy instead of CORS
app.use(bodyParser.json());

app.use("/", apiRouter);

app.listen(port, () => console.log(`Backend listening at http://localhost:${port}`));
