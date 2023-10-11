import mongoose from "mongoose";

export const Connection= async(username, password)=>{
const URL="mongodb://coders:1230@ac-bdvinpt-shard-00-00.ywjbmlm.mongodb.net:27017,ac-bdvinpt-shard-00-01.ywjbmlm.mongodb.net:27017,ac-bdvinpt-shard-00-02.ywjbmlm.mongodb.net:27017/JOBHUNT?ssl=true&replicaSet=atlas-rcdbz0-shard-0&authSource=admin&retryWrites=true&w=majority"


  try{
         const res=await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true});
         console.log("connected to database")
  }
  catch(error){
    console.log("Error while connecting to the database ", error.message)
  }
}

export default Connection;