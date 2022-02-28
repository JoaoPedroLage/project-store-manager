const validationCrPrd = require('../schemas/validationCreateProduct');
const validationSales = require('../schemas/validationCreateSale');

const validateProduct = async (req, res, next) => {
  const { error } = validationCrPrd.validate(req.body);
  
    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }
    return next();
};

const validateSale = async (req, res, next) => {
  const { error } = validationSales.validate(req.body[0]);
  
    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }
    return next();
};

module.exports = {
  validateProduct,
  validateSale,
};