const joi = require('joi');

const schema = joi
  .object({
    APP_SECRET: joi.string()
  })
  .unknown()
  .required();

const { error, value: vars } = joi.validate(process.env, schema);

if (error) throw new Error(`Config validation error: ${error.message}`);

const config = {
  common: {
    secret: vars.APP_SECRET
  }
};

module.exports = config;
