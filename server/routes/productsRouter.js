const { Router } = require('express');
const {
  getAllProducts, getProduct, postProduct, putProduct, deleteProduct,
} = require('../controller/productsController');

const router = Router();

router.get('/products', getAllProducts);
router.post('/products', postProduct);

router.get('/products/:productid', getProduct);
router.put('/products/:productid', putProduct);
router.delete('/products/:productid', deleteProduct);

module.exports = router;
