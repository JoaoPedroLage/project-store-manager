const productService = require('../services/productsServices');

const getAll = async (_req, res, _next) => {
  try {
    const product = await productService.getAll();
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Erro: ${error.message}` });
  }
};

const getById = async (req, res, _next) => {
  try {
    const product = await productService.getById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Erro: ${error.message}` });
  }
};

module.exports = {
  getAll,
  getById,
};
