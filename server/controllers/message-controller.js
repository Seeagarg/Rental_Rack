import Message from "../model/message-schema.js";
import Conversation from "../model/consversation-schema.js";


export const newMessage=async(req, res)=>{
    try{
         const newMessage= new Message(req.body);
         await newMessage.save();
         await Conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text});
         res.status(200).json("Message has been set successfully")
    }
    catch(error){
            res.status(500).json({msg:error.message});
    }
}
export const getMessages=async(req, res)=>{
    try{

        const message= await Message.find({conversationId:req.params.id});
        res.status(200).json(message);
    }
    catch(error){
        console.log("error while gettinh previous message ", error.message);
        res.status(500).json({msg:error.message});
    }
}

