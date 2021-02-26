const tagRoute = require('./tagRoute');
const vendorRoute = require('./vendorRoute');
const menuRoute = require('./menuRoute');
const orderRoute = require('./orderRoute');
const customerRoute = require('./customerRoute');
const listOrderRoute = require('./listOrderRoute');

const route = require('express').Router();

route.use(tagRoute);
route.use(vendorRoute);
route.use(menuRoute);
route.use(orderRoute);
route.use(customerRoute);
route.use(listOrderRoute);

module.exports = route;