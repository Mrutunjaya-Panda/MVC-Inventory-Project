//const express = require('express');
import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import Path from 'path';
import ejsLayouts from 'express-ejs-layouts';

const server = express();

// server.get('/',(req,res) => {
//     return res.send('Welcome to Inventory App');
// })

//setup view engine settings
server.set('view engine', 'ejs'); //set() is used to set some settings in express app

//next we have to set the route where ejs will find the views folder
server.set('views', Path.join(process.cwd(), 'src','views')); //by default it looks for views folder in root directory
//server.set('views', Path.join(path.resolve() 'src','views'));

//after setup of view engine we have to use ejs layouts middleware
server.use(ejsLayouts);//this will help to use layouts in ejs files

const productController = new ProductController();

server.get('/', productController.getProducts);
server.use(express.static('src/views'));

server.listen(3400);
