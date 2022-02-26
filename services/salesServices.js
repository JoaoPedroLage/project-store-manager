const saleModel = require('../models/salesModels');

const getAll = async () => {
  const sales = await saleModel.getAll();

  return sales;
};

const getById = async (id) => {
  const sales = await saleModel.getById(id);

  return sales;
};

const create = async (requireData) => {
  const sale = await saleModel.createSale();
  const saleId = sale.insertId;

  requireData.forEach(
    async ({ productId, quantity }) => saleModel.salesRecord(productId, quantity, saleId),
);
  
  const data = {
    id: saleId,
    itemsSold: requireData,
  };

  return data;
};

const update = async () => {
  
};

module.exports = {
  getAll,
  getById,
  create,
};