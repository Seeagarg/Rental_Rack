import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
     userId:{
        type:String
     },
     name:{
        type:String
     },
     company:{
        type:String
     },
     verified:{
        type:Boolean,
        default:true
     },
     price:{
        type:Number
     },
     productPic:{
        type:String
     },
     description:{
        type:String
     },
     category:{
        type:String
     }
})

const  product=mongoose.model("product", productSchema);
export default product;




