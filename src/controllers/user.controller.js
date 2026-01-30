//controlling user registration and login
import UserModel from "../models/user.model.js";
import ProductModel from "../models/product.model.js";

export default class UserController{
    getRegister(req,res){
        //send the register ejs file
        res.render("register");
    }
    getLogin(req,res){
        res.render("login",{errorMessage:null});
    }

    postRegister(req,res){
        const {name,email,password} = req.body;
        UserModel.add(name,email,password);
        //after registration is done, redirect user to login page.
        res.render('login', {errorMessage:null});
    }

    postLogin(req,res){
        const {email,password} = req.body;
        const user = UserModel.isValidUser(email,password);
        if(!user){
            //i.e undefined
            return res.render("login",{errorMessage: "Invalid Credentials"});
        }

        //after configuring session in index.js, it is going to attach a session object
        //to our request object
        req.session.userEmail = email; //now you will see that session ID is stored on cookies
        //when on the browser
        let products = ProductModel.get();
        return res.render("products", { products, userEmail: req.session.userEmail });
    }

    //adding a function to handle logout request
    logout(req,res){
        //on logout destroy the session
        req.session.destroy((err) => {
            if(err){
                console.log(err);
            }else{
                res.redirect('/login');
            }
        })
        // after logging out, suppose you want to clear your cookie, you can do so by:-
        res.clearCookie("lastVisit"); //takes argument as name of your cookie you want to delete.
    }
}