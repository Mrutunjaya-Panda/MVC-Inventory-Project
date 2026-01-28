//we are going to secure our application by giving access to our product space by logging in candidates.
//no to do it we are gonna create a middleware, to intercept that req object
//and check if that session email is available or not.
// if(available) => user logged In, else not.

export const auth = (req,res,next) => {
    if(req.session.userEmail){
        //means logged in, you can now call the next middleware in the pipeline
        next();
    }else{
        res.redirect('/login'); //takes the argument as URL.
    }
}

//now we will use this middlewares in the routes which we want to secure.
//like except register and login page - as they are the session creators, rest we have to secure