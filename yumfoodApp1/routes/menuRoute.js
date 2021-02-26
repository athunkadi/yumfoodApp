const MenuController = require('../controllers/MenuController');

const route = require('express').Router();

route.get('/menu', MenuController.getData);
route.get('/menu/:id', MenuController.getDataById);
route.get('/menuByVendor/:id', MenuController.getDatabyVendor);
route.get('/menuByTag/:id', MenuController.getDataByTag);
route.post('/addMenu', MenuController.addMenu);
route.put('/editMenu/:id', MenuController.editMenu);
route.delete('/deleteMenu/:id', MenuController.deleteMenu);

module.exports = route;