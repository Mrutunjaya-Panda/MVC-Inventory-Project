//const express = require('express');
import express from 'express';
import ProductController from './src/controllers/product.controller.js';

const server = express();

// server.get('/',(req,res) => {
//     return res.send('Welcome to Inventory App');
// })

const productController = new ProductController();

server.get('/', productController.getProducts);
server.use(express.static('src/views'));

server.listen(3400);
