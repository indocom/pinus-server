import dotenv from "dotenv";
import path from "path";

import { FirebaseConfig, initFirebaseConfig } from "../firebase/config";

interface Config {
  firebase: FirebaseConfig;
}

export function initConfig(onProduction: boolean): Config {
  if (!onProduction) {
    dotenv.config({ path: path.resolve(__dirname, "../../.env") });
  }

  const config: Config = {
    firebase: initFirebaseConfig(onProduction),
  };

  return config;
}
