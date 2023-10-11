import mongoose from "mongoose";
const rentalProviderSchema= new mongoose.Schema({
    userId:{
        type:String,
        default:"000000"
    },
    profilePic:{
        type:String
    },
    aadhar:{
        type:String
    },
    address:{
        type:String
    },
    verified:{
        type:Boolean,
        default:false
     },
    country:{
        type:String,
        default:"India"
    },
    pin:{
        type:String
    }
})
const rentalProvider=mongoose.model("rental-provider",rentalProviderSchema);
export default rentalProvider;

