import mongoose from "mongoose";

const workerGroupSchema= new mongoose.Schema({
groupName:{
        type:String,

},
profilePic:{
    type:String,
      default:"https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
},
leaderName:{
    type:String,
    default:"Ram Lal"
},
experience:{
    type:Number
},
price:{
    type:Number
},
groupSize:{
  type:String
},
userId:{
    type:String
},
category:{
    type:String,
    default:"group-worker"
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
phone:{
    type:Number
}

})

const workerGroup=mongoose.model("workerGroup",workerGroupSchema);
export default workerGroup;