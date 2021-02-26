const ListOrderController = require('../controllers/ListOrderController');

const route = require('express').Router();

route.get('/listOrder', ListOrderController.getData);
route.get('/listOrderByOrder/:id', ListOrderController.getDataByOrder);
route.get('/listOrderByCustomer/:id', ListOrderController.getDataByCustomer);
route.post('/addListOrder', ListOrderController.addListOrder);
route.delete('/deleteListOrder/:id', ListOrderController.deleteListOrder);

module.exports = route;