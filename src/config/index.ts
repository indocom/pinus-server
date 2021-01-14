import dotenv from "dotenv";
import path from "path";

interface Config {
  server: ServerConfig;
  db: DbConfig;
}

interface ServerConfig {
  port: number;
}

interface DbConfig {
  database: string;
  host: string;
  port: number;
  user: string;
  password: string;
}

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: path.resolve(__dirname, "../../.env") });
}

const config: Config = {
  server: {
    port: getIntVarOrError("SERVER_PORT"),
  },
  db: {
    database: getVarOrError("DB_NAME"),
    host: getVarOrError("DB_HOST"),
    port: getIntVarOrError("DB_PORT"),
    user: getVarOrError("DB_USER"),
    password: getVarOrError("DB_PASSWORD"),
  },
};

function getVarOrError(field: string): string {
  const val = process.env[field];
  if (val === undefined) {
    throw new Error(`Environment variable ${field} is not set.`);
  }

  return val;
}

function getIntVarOrError(field: string): number {
  const val = getVarOrError(field);
  const valInt = parseInt(val, 10);
  if (isNaN(valInt)) {
    throw new Error(`Environment variable ${field} is not a number.`);
  }

  return valInt;
}

export default config;
