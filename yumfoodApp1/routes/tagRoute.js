const TagController = require('../controllers/TagController');

const route = require('express').Router();

route.get('/tag', TagController.getData);

module.exports = route;