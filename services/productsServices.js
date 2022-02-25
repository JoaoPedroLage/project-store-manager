const productModel = require('../models/productsModels');

const getAll = async () => {
  const products = await productModel.getAll();

  return products;
};

const getById = async (id) => {
  const products = await productModel.getById(id);

  return products;
};

module.exports = {
  getAll,
  getById,
};