import { Options, Sequelize } from "sequelize";

import configs, { Config } from "../config/config";
import { SampleFactory } from "./sample";

const env = process.env.NODE_ENV || "development";
const config: Config = configs[env];

// Sequelize instance
export const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable] || "", config as Options)
  : new Sequelize(config.database || "", config.username || "", config.password || "", config as Options);

/**
 * @openapi
 * components:
 *  schemas:
 *    BaseModel:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        createdAt:
 *          type: string
 *          format: date-time
 *        updatedAt:
 *          type: string
 *          format: date-time
 */

// Sample model and interfaces
export * from "./sample";
export const Sample = SampleFactory(sequelize);
