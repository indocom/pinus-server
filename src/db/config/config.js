module.exports = {
  development: {
    dialect: "postgres",
    host: "localhost",
    database: "pinusweb",
    username: "pinus_admin",
    password: "pinusians"
  },
  production: {
    dialect: "postgres",
    use_env_variable: true,
    logging: false
  }
};
