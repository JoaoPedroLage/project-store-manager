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

module.exports = {
  getAll,
  getById,
};
