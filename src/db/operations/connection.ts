import { sequelize } from "../models";
import { handleSequelizePromise, SequelizePromise } from "../util";

export async function checkConnection(): SequelizePromise<boolean> {
  const [, err] = await handleSequelizePromise(sequelize.authenticate());

  if (err) {
    return [undefined, err];
  }

  return [true, err];
}
