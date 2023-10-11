
import mongoose from "mongoose";

const contractorSchema=mongoose.Schema({
    profilePic:{
        type:String,
        default:"https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
},
aadhar:{
    type:String,
    required:true
},

experience:{
    type:Number
},
price:{
    type:Number
},
role:{
    type:String,
    default:"contractor"
},
userId:{
    type:String
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
age:{
    type:Number
},
 status:{
    type:Boolean,
    default:false
 },
phone:{
    type:Number
},
 verified:{
        type:Boolean,
        default:false
},
businessName:{
    type:String
}
})

const contractor=mongoose.model("contractor",contractorSchema )
export default contractor;


