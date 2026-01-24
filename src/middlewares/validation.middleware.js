//here instead of keeping all the validation logic in the controller file, I will create a middleware for that
//and move the validation logic there, this helps to keep the controller file clean and also we can reuse the middleware
//in other controllers if needed

import { body, validationResult } from "express-validator"; //this body refers to the body of the request
const validateRequest = async (req, res, next) => {
  //befor adding we will be validating the data on server side
  // const { name, price, imageUrl } = req.body;
  // let errors = [];
  // if (!name || name.trim() == '') {
  //   errors.push('Name is required');
  // }
  // if (!price || parseFloat(price) < 1) {
  //   errors.push(
  //     'Price must be a positive value'
  //   );
  // }
  // try {
  //   const validUrl = new URL(imageUrl);
  // } catch (err) {
  //   errors.push('URL is invalid');
  // }

  //we will replace the above code with express-validator package
  // steps:-
  //  1. setup rules for validation
  const rules = [
    body("name").notEmpty().withMessage("Name is required"),
    body("price")
      .isFloat({ gt: 1 })
      .withMessage("Price must be a positive value"),
    // body("imageUrl").isURL().withMessage("URL is invalid"),
    //by custom validator we can also validate if file is uploaded or not
    body("imageUrl").custom((value, {req})=>{
      if(!req.file){
        throw new Error('Image file is required');
      }
      return true;
    })
    //here value refers to the value of imageUrl field in the form
  ];

  //2. run those rules against incoming request

  await Promise.all(rules.map((rule) => rule.run(req)));

  //3. check if there are any validation errors
  var validationErrors = validationResult(req); //it is an object that contains all the validation errors

  //4. if errors return those errors to the user
  // .array() converts the errors into an array
  if (validationErrors.array().length > 0) {
    //I also want formData to be added so that I didn't need to retype everything again and again
    return res.render("new-product", {
      errorMessage: validationErrors.array()[0].msg,
      formData: req.body,
    });
  }
  //if there are no issues, then it will call the next middleware in the pipeline.
  next();
};

export default validateRequest;
