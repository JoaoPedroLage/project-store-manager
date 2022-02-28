const saleService = require('../services/salesServices');

const getAll = async (_req, res, _next) => {
  try {
    const sale = await saleService.getAll();
    return res.status(200).json(sale);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Erro: ${error.message}` });
  }
};

const getById = async (req, res, _next) => {
  try {
    const sale = await saleService.getById(req.params.id);
    if (!sale) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    return res.status(200).json(sale);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Erro: ${error.message}` });
  }
};

const create = async (req, res, _next) => {
  try {
    const product = await saleService.create(req.body);
    
    return res.status(201).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Erro: ${error.message}` });
  }
};

const update = async (req, res, _next) => {
  try {
    const product = await saleService.update(req.params.id, req.body);
    
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Erro: ${error.message}` });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};
