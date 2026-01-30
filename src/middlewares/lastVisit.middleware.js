//Adding lastVisit feature for every user

export const setLastVisit = (req,res,next) => {
    // 1. if cookie is set, then add a local variable with last visit time data.
    //and this variable value will be rendered in our view.
    //as rendering happens in the server side because you are using ejs view Engine
    // so every req is gonna resolved in server side, thatswhy we need to store it
    // in a variable.
    if(req.cookies.lastVisit){
        //name of our cookie is lastVisit
        // client will send you cookies in request object
        // i.e all the cookies stored in the browser, client will send them in req object 
        // which you can access using req.cookies

        //entering if block => we have cookie from client.
        res.locals.lastVisit = new Date(req.cookies.lastVisit).toLocaleString();
    }
    //else user is visiting for the first time, so we need to set cookie

    res.cookie('lastVisit',new Date().toISOString(),{
        // options field, i.e you can set expiration period, sign, mention path for the cookie
        maxAge: 2*24*60*60*1000 //as it takes value in milliseconds, so for 2 days.
    });

    next();
}