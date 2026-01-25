//here in this controller folder we will handle all the product related requests and will
//serve the product files dynamically
import path from "path";
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.get();
    //console.log(products);
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
    return res.render("new-product", { errorMessage: null });
  }

  //now let's make another controller method here to get and show the received data
  // when the user submits the new product form
  addNewProduct(req, res) {
    //after using the middleware we will be able to see the form data in req.body
    const {name,desc,price} = req.body;
    const imageUrl = req.file ? '/images/' + req.file.filename : '';
    ProductModel.add(name,desc,price,imageUrl);

    //retrieve the updated products list and render the products view again
    let products = ProductModel.get();
    return res.render("products", { products: products });
  }

  //function for updating a product can also be added here
  getUpdateProductView(req, res, next) {
    //1. if product with given id exists, then render the update form with existing data
    //const { id } = req.body; wrong way to get id as we are not submitting any form here

    const { id } = req.params; //correct way to get id from route parameters
    //req.params is an json object that contains all the route parameters
    //so I need to convert the id to integer before comparing or just use double equals operator
    //const productId = parseInt(id);

    const productFound = ProductModel.getById(id);
    if (productFound) {
      //render the update-product view here
      return res.render("update-product", {
        product: productFound,//you might be wondering how here we are using product key, it is because in the ejs file we are using product to access the data
        //i.e in products.ejs we are using product.name, product.desc etc to access the data
        //don't think how we are using product key here, just remember that the key name should be same as used in ejs file/model files to access the data
        errorMessage: null,
      });
    }
    //2. else return errors
    else {
      return res
        .status(401)
        .send("Product with given id does not exist/not found");
      //return res.render('update-product', {errorMessage: 'Product with given id does not exist'});
    }
  }

  postUpdateProduct(req,res,next){
    const {id,name,desc,price} = req.body;
    const imageUrl = req.file ? '/images/' + req.file.filename : '';
    //req.body.imageUrl = imageUrl; //add the imageUrl to the req.body object
    const updatedObj = new ProductModel(id,name,desc,price,imageUrl);
    ProductModel.update(updatedObj);

    //retrieve the updated products list and render the products view again
    let products = ProductModel.get();
    return res.render("products", { products: products });
  }

  //delete product method
  deleteProduct(req,res){
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    if(!productFound){
      return res.status(401).send("Product with given id does not exist/not found");
    }
    ProductModel.delete(id);

    //retrieve the updated products list and render the products view again
    var products = ProductModel.get();
    return res.render("products", { products: products });
  }
}
