// imports
const express = require('express');
const route = express.Router();
// import controllers
const productController = require('../controller/ProductsController')

// routes
route.get('/', productController.index);
// route.post('/destroy', productController.destroy);
route.get('/destroy/:id', productController.destroy);

// export
module.exports = route;