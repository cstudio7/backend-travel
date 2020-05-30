"use strict";

require('dotenv').config();

module.exports = {
  production: {
    use_env_variable: 'DATABASE_URL'
  }
};