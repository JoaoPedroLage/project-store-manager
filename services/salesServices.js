const saleModel = require('../models/salesModels');

const getAll = async () => {
  const sales = await saleModel.getAll();

  return sales;
};

const getById = async (id) => {
  const sale = await saleModel.getById(id);

  return sale;
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

const update = async (saleId, requireData) => {
  const { productId, quantity } = requireData[0];
  
  await saleModel.updateSale(Number(saleId), productId, quantity);

  const data = {
    saleId,
    itemUpdated: requireData,
  };

  return data;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};