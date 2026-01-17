//here in this controller folder we will handle all the product related requests and will
//serve the product files dynamically
import path from "path";
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.get();
    console.log(products);
    return res.render("products", { products: products });

    //N.B:- The key name in the object i.e 'products' should be same as used in ejs file to access the data
  }

  //now I need to send the new-product form to the user, so that he can add new products
  //for that I will create a new method in this controller
  getAddForm(req, res) {
    return res.render('new-product',{errors: null});
    //return res.render("new-product", { errors: [] }); //initially there will be no errors in the form
  }

  //now let's make another controller method here to get and show the received data
  // when the user submits the new product form
  addNewProduct(req, res) {
    //console.log(req.body);

    //before adding new data to the array we have to validate the data
    const { name, price, imageUrl } = req.body;
    let errors = [];
    if (!name || name.trim() === "") {
      errors.push("Product name is required");
    }
    if (!price || parseFloat(price) < 1) {
      errors.push("Price should be a positive number");
    }
    //for url use try and catch
    try {
      const validUrl = new URL(imageUrl); //if url is invalid it will throw error
      //this is a instance of URL class, url class is inbuilt in JS is primarily used for parsing of url strings
    } catch (err) {
      errors.push("Please provide a valid image URL");
    }

    if (errors.length > 0) {
      //i.e if there are any validation errors
      //return res.render("new-product", { errors: errors[0], formData: req.body });
      return res.render("new-product", { errors: errors[0]}); //sending back the form data so that user does not have to retype it
      //his provides a better user experience—instead of forcing the user to re-type everything after validation errors, the form retains their previously entered data so they only need to fix the problematic fields.
    }

    //after using the middleware we will be able to see the form data in req.body
    ProductModel.add(req.body);

    //retrieve the updated products list and render the products view again
    let products = ProductModel.get();
    return res.render("products", { products: products });
  }
}
