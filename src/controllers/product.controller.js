//here in this controller folder we will handle all the product related requests and will
//serve the product files dynamically
import path from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController{
    getProducts(req,res){
        let products = ProductModel.get();
        console.log(products);
        //we are not going to use below line it anymore after ejs addition
        //return res.sendFile(path.join(process.cwd(),'src','views','products.html'));
        //or
        //return res.sendFile(path.resolve('src','views','products.html'));

        //the render() function takes parameters view name(i.e ejs file name) and data to be sent to view
        //data is sent in form of object
        return res.render('products', {products: products});

        //N.B:- The key name in the object i.e 'products' should be same as used in ejs file to access the data
    }
}