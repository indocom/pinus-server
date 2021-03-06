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
const configs = {
  development: {
    dialect: "postgres",
    host: "localhost",
    database: "pinusweb",
    username: "pinus_admin",
    password: "pinusians"
  },
  production: {
    dialect: "postgres",
    use_env_variable: "DATABASE_URL",
    logging: false
  }
};

module.exports = configs;
