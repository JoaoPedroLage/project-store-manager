const validationCrPrd = require('../schemas/validationCreateProduct');

const validateProduct = async (req, res, next) => {
  const { error } = validationCrPrd.validate(req.body);
  
    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }
    return next();
  };

module.exports = {
  validateProduct,
};