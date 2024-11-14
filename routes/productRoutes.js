const express = require('express');
const router = express.Router();
const { getProductsByType, getPromotions } = require('../controllers/productController');

router.get('/promotions', getPromotions);
router.get('/:type', getProductsByType);

module.exports = router;



