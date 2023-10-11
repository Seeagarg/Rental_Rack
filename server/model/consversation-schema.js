import mongoose from "mongoose"

const consversationSchema= mongoose.Schema({
    userId:{
        type:String
    },
    members:{
        type:Array
    },
    message:{
        type:String
    }
}, {timestamps:true});

const conversation=mongoose.model("Conversation", consversationSchema);
export default conversation;