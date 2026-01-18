//here in this controller folder we will handle all the product related requests and will
//serve the product files dynamically
import path from "path";
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.get();
    console.log(products);
    //we are not going to use below line it anymore after ejs addition
    //return res.sendFile(path.join(process.cwd(),'src','views','products.html'));
    //or
    //return res.sendFile(path.resolve('src','views','products.html'));

    //the render() function takes parameters view name(i.e ejs file name) and data to be sent to view
    //data is sent in form of object
    return res.render("products", { products: products });

    //N.B:- The key name in the object i.e 'products' should be same as used in ejs file to access the data
  }

  //now I need to send the new-product form to the user, so that he can add new products
  //for that I will create a new method in this controller
  getAddForm(req, res) {
    
    return res.render('new-product', { errorMessage: null });
  }

  //now let's make another controller method here to get and show the received data
  // when the user submits the new product form
  addNewProduct(req, res) {
    
    
    //after using the middleware we will be able to see the form data in req.body
    ProductModel.add(req.body);

    //retrieve the updated products list and render the products view again
    let products = ProductModel.get();
    return res.render("products", { products: products });
  }
}
