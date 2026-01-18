//here instead of keeping all the validation logic in the controller file, I will create a middleware for that
//and move the validation logic there, this helps to keep the controller file clean and also we can reuse the middleware
//in other controllers if needed


const validateRequest = (req, res, next) => {
    //befor adding we will be validating the data on server side
    const { name, price, imageUrl } = req.body;
    let errors = [];
    if (!name || name.trim() == '') {
      errors.push('Name is required');
    }
    if (!price || parseFloat(price) < 1) {
      errors.push(
        'Price must be a positive value'
      );
    }
    try {
      const validUrl = new URL(imageUrl);
    } catch (err) {
      errors.push('URL is invalid');
    }

    if (errors.length > 0) {
      //I also want formData to be added so that I didn't need to retype everything again and again
      return res.render('new-product', {
        errorMessage: errors[0], formData: req.body
      });
    }
    //if there are no issues, then it will call the next middleware in the pipeline.
    next();
};

export default validateRequest;