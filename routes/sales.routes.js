const express = require('express');

const salesControllers = require('../controllers/salesControllers');

const router = express.Router();

router.get(
  '/',
  salesControllers.getAll,
);

router.get(
  '/:id',
  salesControllers.getById,
);

// router.post(
//   '/',
//   salesControllers.create,
// );

module.exports = router;