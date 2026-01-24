// middleware to handle file uploads

import multer from "multer";
//we need to have two infos:- where to store the file and how to name the file

//diskstorage() is the configuration of how the file needs to be stored
//takes object with 2 properties:- destination and filename

const storageConfig = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'public/images'); //first parameter is error(if any), second is destination folder path
    },
    filename: (req,file,cb) => {
        //there can be multiple files with same name, so to avoid that we will add timestamp before the file name
        const name = Date.now() + '-' + file.originalname;
        cb(null,name); //first parameter is error(if any), second is file name
    },
})

//now we just need to export this so that it can be used as middleware in routes
//by creating a multer instance
export const uploadFile = multer({
    storage: storageConfig,
})