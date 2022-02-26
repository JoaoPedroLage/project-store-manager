const express = require('express');

const productsControllers = require('../controllers/productsControllers');
const validationMiddleware = require('../middlewares/validation.middleware');

const router = express.Router();

router.get(
  '/',
  productsControllers.getAll,
);

router.get(
  '/:id',
  productsControllers.getById,
);

router.post(
  '/',
  validationMiddleware.validateProduct,
  productsControllers.create,
);

router.put(
  '/:id',
  validationMiddleware.validateProduct,
  productsControllers.update,
);

router.delete(
  '/:id',
  productsControllers.exclude,
);

module.exports = router;
