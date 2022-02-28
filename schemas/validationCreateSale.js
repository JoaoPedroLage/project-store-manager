const Joi = require('joi');

module.exports = Joi.object({
  productId: Joi.number()
  .strict()
  .required()
  .integer()
  .messages({
    'number.base': '422|"productId" must be a number',
    'any.required': '400|"productId" is required',
    'number.integer': '422|"productId" must an integer',
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