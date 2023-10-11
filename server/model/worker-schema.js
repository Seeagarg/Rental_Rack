import mongoose from "mongoose";


const workerSchema= new mongoose.Schema({
    profilePic:{
            type:String,
            default:"https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
    },
    aadhar:{
        type:Number,
        required:true
    },
    aadharPic:{
        type:String,
        default:""
    },
    experience:{
        type:Number
    },
    price:{
        type:Number
    },
    fullName:{
        type:String,
        default:"Ram Lal"
    },
    userId:{
        type:String
    },
    email:{
        type:String,
        default:"Not available"
    },
    role:{
        type:String,
        default:"worker"
    },
    pin:{
        type:Number
    },
    address:{
        type:String
    },
    country:{
        type:String,
        default:"India"
    },
    status:{
            type:Boolean,
            default:true
    },
    verified:{
        type:Boolean,
        default:false
     },
    age:{
        type:Number
    },
    phone:{
        type:Number
    }
});



const worker= mongoose.model('worker',workerSchema);
export default worker;

//verified k place prr status and status k place prr available