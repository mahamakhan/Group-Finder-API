require("dotenv").config();
module.exports = {
  development: {
    database: "sequelize_lfg",
    dialect: "postgres",
  },
  test: {
    database: "sequelize_lfg",
    dialect: "postgres",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true,
      },
    },
  },
};
