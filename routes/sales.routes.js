const express = require('express');

const salesControllers = require('../controllers/salesControllers');
const validationMiddleware = require('../middlewares/validation.middleware');

const router = express.Router();

router.get(
  '/',
  salesControllers.getAll,
);

router.get(
  '/:id',
  salesControllers.getById,
);

router.post(
  '/',
  validationMiddleware.validateSale,
  salesControllers.create,
);

router.put(
  '/:id',
  validationMiddleware.validateSale,
  salesControllers.update,
);

module.exports = router;