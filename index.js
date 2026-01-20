//const express = require('express');
import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import Path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import validateRequest from './src/middlewares/validation.middleware.js';

const server = express();

//parse form data
server.use(express.urlencoded({extended:true})); //this middleware will parse the incoming form data and
//populate the req.body object with the parsed data

// server.get('/',(req,res) => {
//     return res.send('Welcome to Inventory App');
// })

//setup view engine settings
server.set('view engine', 'ejs'); //set() is used to set some settings in express app

//next we have to set the route where ejs will find the views folder
server.set('views', Path.join(process.cwd(), 'src','views')); //by default it looks for views folder in root directory
//server.set('views', Path.join(path.resolve(), 'src','views'));

//after setup of view engine we have to use ejs layouts middleware
server.use(ejsLayouts);//this will help to use layouts in ejs files

const productController = new ProductController();

server.get('/', productController.getProducts);
server.get('/new', productController.getAddForm);

//we cannot hard code the id in the URL, so we will use route parameters to get the id dynamically
//route parameter/URL parameters is defined by adding a colon before the parameter name
server.get('/update-product/:id', productController.getUpdateProductView);//we are not submitting any form here, just getting the update form

//for the same URL we can have multiple methods with different HTTP verbs
//before adding a new product we will be validating the data on server side using validation middleware
//so we will add that middleware in the pipeline for this route
server.post('/', validateRequest, productController.addNewProduct);

//we will have one more post route to handle the form submission for updating a product
//to serve static files like css,js,image files we have to use express.static() middleware

server.post('/update-product',productController.postUpdateProduct);

server.use(express.static('src/views'));

server.listen(3400);
