import mongoose from "mongoose";
import { Router } from "express";
import bcrypt from "bcrypt";
import { User } from "./Model/UserModel.js";
import jwt from "jsonwebtoken";
import authenticate from "./authenticate.js";
import checkRole from "./checkRole.js";

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

route.post('/login',async(request,response)=>{
    const{username,password}=request.body;
    try{
        const inUser = await User.findOne({username});
        if(!inUser){
            return response.status(404).send("Invalid credentials");
        }
        const passwordCheck = await bcrypt.compare(password,inUser.password);
        if(passwordCheck){
            const token = jwt.sign({username:username,roles:inUser.roles},'your_secret_key',{expiresIn: '1h'});
            return response.status(200).json({token,message:"Logged in successfully"});
        }
        else{
            return response.status(401).json({token,message:"Invalid credentials"});
        }
    }catch(error){
        console.error(error);
        return response.status(500).json({error: "Internal server error"});
    }
});

route.get('/protected-route',authenticate,(request,response)=>{
    response.json({message:"Access granted to user",user:request.user});
});

route.get('/admin-route',authenticate,checkRole(['admin']),(request,response)=>{
    response.json({message:"Access granted to admin"});
});

route.get('/another-protected-route',(request,response)=>{
    const userRole = request.user.roles;
    if(userRole.includes('admin')){
        response.json({message:"Access granted to another protected route"});
    }else{
        response.status(403).json({error:"Unauthorized"});
    }
});

export default route;
