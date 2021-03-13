import { Options, Sequelize } from "sequelize";

import configs, { Config } from "../config/config";
import { SampleFactory } from "./sample";
import { CategoryFactory } from "./category";
import { ArticleFactory } from "./article";

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
export * from "./category";
export * from "./article";

export const Sample = SampleFactory(sequelize);
export const Category = CategoryFactory(sequelize);
export const Article = ArticleFactory(sequelize);
