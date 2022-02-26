const productModel = require('../models/productsModels');

const getAll = async () => {
  const products = await productModel.getAll();

  return products;
};

const getById = async (id) => {
  const products = await productModel.getById(id);

  return products;
};

const create = async ({ name, quantity }) => {
  const product = await productModel.create(name, quantity);

  return product;
};

const update = async ({ params, body }) => {
  const product = await productModel.update(params, body);

  return product;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};