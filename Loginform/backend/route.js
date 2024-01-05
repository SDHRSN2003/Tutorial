import mongoose from "mongoose";
import { Router } from "express";
import { User } from "./Model/UserModel.js";

const route = Router();

route.get('/',(request,response)=>{
    response.send("Hello world");
});
route.post('/register',async(request,response)=>{
    const{username,password} = request.body;
    try{
        const newUser = new User({username,password});
        await newUser.save();
        return response.status(200).send("User registered successfully.");
    }
    catch(error){
        console.error(error);
        return response.status(502).send("Internal error occured.");
    }
    
});

export default route;
