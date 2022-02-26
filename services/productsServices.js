const productModel = require('../models/productsModels');

const getAll = async () => {
  const products = await productModel.getAll();

  return products;
};

const getById = async (id) => {
  const product = await productModel.getById(id);

  return product;
};

const create = async ({ name, quantity }) => {
  const newProduct = await productModel.create(name, quantity);

  return newProduct;
};

const update = async ({ name, quantity }, id) => {
  const updateOK = await productModel.update(name, quantity, id);

  if (!updateOK) return false;

  const updatedProduct = await productModel.getById(id);

  return updatedProduct;
};

const exclude = async (id) => {
  const excludeProduct = productModel.exclude(id);

  return excludeProduct;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  exclude,
};