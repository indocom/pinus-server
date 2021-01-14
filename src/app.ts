import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import config from "./config";
import apiRouter from "./api";

const port = process.env.SERVER_PORT;

const app = express();

app.use(cors()); // TODO: Use reverse-proxy instead of CORS
app.use(bodyParser.json());

app.use("/api", apiRouter);

app.listen(config.server.port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
