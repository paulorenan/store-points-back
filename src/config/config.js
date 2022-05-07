require('dotenv').config();

const { PASSWORD_DB, HOST, DATABASE, DB_USERNAME } = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": PASSWORD_DB,
    "database": DATABASE,
    "host": HOST,
    "dialect": "postgres",
    "ssl": {
      "rejectUnauthorized": false
    }
  },
  "test": {
    "username": DB_USERNAME,
    "password": PASSWORD_DB,
    "database": DATABASE,
    "host": HOST,
    "dialect": "postgres",
    "ssl": {
      "rejectUnauthorized": false
    }
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  }
}

