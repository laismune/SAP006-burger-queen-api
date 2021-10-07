const { Router } = require('express');
const {
  getAllOrders, getOrder, postOrder, putOrder, deleteOrder,
} = require('../controller/ordersController');

const router = Router();

router.get('/orders', getAllOrders);
router.post('/orders', postOrder);

router.get('/orders/:orderid', getOrder);
router.put('/orders/:orderid', putOrder);
router.delete('/orders/:orderid', deleteOrder);

module.exports = router;
