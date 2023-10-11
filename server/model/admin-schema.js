import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const adminSchema= new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    }
})
const admin= mongoose.model('admin', userSchema);
export default admin;


