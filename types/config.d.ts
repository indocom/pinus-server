export = configs;
/**
 * @typedef {{[key:string]: Config}} Configs
 */
/**
 * @typedef {Object} Config
 * @property {string} dialect
 * @property {string} [host]
 * @property {string} [database]
 * @property {string} [username]
 * @property {string} [password]
 * @property {string} [use_env_variable]
 * @property {boolean} [logging]
 */
/** @type Configs */
declare const configs: Configs;
declare namespace configs {
  export { Configs, Config };
}
type Configs = {
  [key: string]: Config;
};
type Config = {
  dialect: string;
  host?: string;
  database?: string;
  username?: string;
  password?: string;
  use_env_variable?: string;
  logging?: boolean;
};
