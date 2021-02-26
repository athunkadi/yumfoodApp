const CustomerController = require('../controllers/CustomerController');

const route = require('express').Router();

route.get('/customer', CustomerController.getData);
route.post('/addCustomer', CustomerController.addCustomer);
route.put('/editCustomer/:id', CustomerController.editCustomer);
route.delete('/deleteCustomer/:id', CustomerController.deleteCustomer);

module.exports = route;