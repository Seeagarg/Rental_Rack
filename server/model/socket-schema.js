
import mongoose from "mongoose";

const socketSchema= new mongoose.Schema({
   userId:{
    type:String
   },
   socketId:{
    type:String
   }
})
const socket= mongoose.model('socket', socketSchema);
export default socket;