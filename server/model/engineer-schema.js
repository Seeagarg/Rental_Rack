import mongoose from "mongoose";

const engineerSchema=new mongoose.Schema({
profilePic:{
        type:String,
        default:"https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
},
aadhar:{
    type:Number,
    required:true
},

experience:{
    type:Number
},
userId:{
    type:String
},
type:{
  type:String,
  default:"civil"
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
        default:false
},
available:{
    type:Boolean,
    default:true
 },
age:{
    type:Number
},
phone:{
    type:Number
}

})

const engineer=mongoose.model('engineer',engineerSchema);
export default engineer;