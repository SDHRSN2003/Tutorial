import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserModel = mongoose.Schema({
    username:{
        type: String,
        required: true
    },  
    password:{
        type: String,
        required: true
    }
});

UserModel.pre('save',async function(next){
    const user = this;
    if(!user.isModified('password')) return next();
    try{
        const hashedPassword = await bcrypt.hash(user.password,10);   
        user.password = hashedPassword;
        next();
    }catch(error){
        return next(error);
    }
});

export const User = mongoose.model('User',UserModel);