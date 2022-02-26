const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string()
  .required()
  .min(5)
  .messages({
    'string.base': '422|"name" must be a string',
    'any.required': '400|"name" is required',
    'string.min': '422|"name" length must be at least 5 characters long',
  }),
  quantity: Joi.number()
  .strict()
  .required()
  .integer()
  .greater(0)
  .messages({
    'number.base': '422|"quantity" must be a number',
    'any.required': '400|"quantity" is required',
    'number.integer': '422|"quantity" must an integer',
    'number.greater': '422|"quantity" must be greater than or equal to 1',
  }),
});