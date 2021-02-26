const OrderController = require('../controllers/OrderController');

const route = require('express').Router();

route.get('/order', OrderController.getData);
route.get('/order/:id', OrderController.getDataById);
route.post('/addOrder', OrderController.addOrder);
route.put('/editOrder/:id', OrderController.editOrder);
route.delete('/deleteOrder/:id', OrderController.deleteOrder);

module.exports = route;