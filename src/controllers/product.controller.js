//here in this controller folder we will handle all the product related requests and will
//serve the product files dynamically
import path from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController{
    getProducts(req,res){
        let products = ProductModel.get();
        console.log(products);
        return res.sendFile(path.join(process.cwd(),'src','views','products.html'));
        //or
        //return res.sendFile(path.resolve('src','views','products.html'));
    }
}