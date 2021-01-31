import { Model, ModelCtor, Options, Sequelize } from "sequelize";

import configs, { Config } from "../config/config";
import { SampleFactory } from "./sample";

const env = process.env.NODE_ENV || "development";
const config: Config = configs[env];

interface Database {
  sequelize: Sequelize;
  models: {
    [key: string]: ModelCtor<Model>;
  };
}

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable] || "", config as Options)
  : new Sequelize(config.database || "", config.username || "", config.password || "", config as Options);

export const db: Database = {
  sequelize: sequelize,
  models: {
    Sample: SampleFactory(sequelize),
  },
};
