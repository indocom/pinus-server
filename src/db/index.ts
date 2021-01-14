import pgPromise from "pg-promise";

import config from "../config";

const pgp = pgPromise();
const conn = {
  database: config.db.database,
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
};
const db = pgp(conn);

export default db;
