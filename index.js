//const express = require('express');
import express from "express";
import ProductController from "./src/controllers/product.controller.js";
import UserController from "./src/controllers/user.controller.js";
import Path from "path";
import ejsLayouts from "express-ejs-layouts";
import validateRequest from "./src/middlewares/validation.middleware.js";
import { uploadFile } from "./src/middlewares/file-upload.middleware.js";
import session from "express-session";

import {auth} from "./src/middlewares/auth.middleware.js";

import cookieParser from "cookie-parser";
import { setLastVisit } from "./src/middlewares/lastVisit.middleware.js";

const server = express();

server.use(express.static("public")); //to serve static files from public folder, currently created for deleting popup feature

//parse form data

//we have to configure for session
server.use(session({
    secret: "SecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false},
}));
server.use(express.urlencoded({ extended: true })); //this middleware will parse the incoming form data and

// create and use cookies to see the last time visited of a user
server.use(cookieParser());
//server.use(setLastVisit); //will be used for all the requests

//setup view engine settings
server.set("view engine", "ejs"); //set() is used to set some settings in express app

//next we have to set the route where ejs will find the views folder
server.set("views", Path.join(process.cwd(), "src", "views")); //by default it looks for views folder in root directory
//server.set('views', Path.join(path.resolve(), 'src','views'));

//after setup of view engine we have to use ejs layouts middleware
server.use(ejsLayouts); //this will help to use layouts in ejs files

const productController = new ProductController();
const userController = new UserController();

server.get("/", setLastVisit, auth, productController.getProducts);
server.get("/new", auth, productController.getAddForm);
//we cannot hard code the id in the URL, so we will use route parameters to get the id dynamically
//route parameter/URL parameters is defined by adding a colon before the parameter name
server.get("/update-product/:id", auth, productController.getUpdateProductView); //we are not submitting any form here, just getting the update form

//route to serve register ejs file
server.get("/register", userController.getRegister);
server.get("/login",userController.getLogin);
server.post("/register",userController.postRegister);
server.post("/login", userController.postLogin);

//route to handle logout
server.get("/logout",userController.logout);

//to delete
server.post("/delete-product/:id", auth, productController.deleteProduct);

//for the same URL we can have multiple methods with different HTTP verbs
//before adding a new product we will be validating the data on server side using validation middleware
//so we will add that middleware in the pipeline for this route

server.post("/", auth, uploadFile.single("imageUrl"), validateRequest, productController.addNewProduct);
//this .single() method is used to upload a single file, the parameter is the name of the input field in the form

//we will have one more post route to handle the form submission for updating a product
//to serve static files like css,js,image files we have to use express.static() middleware

server.post("/update-product", auth, uploadFile.single("imageUrl"), productController.postUpdateProduct);

server.use(express.static("src/views"));


server.listen(3400);
