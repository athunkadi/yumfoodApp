const VendorController = require('../controllers/VendorController');

const route = require('express').Router();

route.get('/vendor', VendorController.getData);
route.post('/addVendor', VendorController.addVendor);
route.put('/editVendor/:id', VendorController.editVendor);
route.delete('/deleteVendor/:id', VendorController.deleteVendor);

module.exports = route;