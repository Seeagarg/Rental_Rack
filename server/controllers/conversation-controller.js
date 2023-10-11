import Conversation from "../model/consversation-schema.js"
export const newConversation= async(req,res)=>{
    try{
        const senderId=req.body.senderId;
        const receiverId=req.body.receiverId;
        console.log("sender id ",senderId, "  receiver id ",receiverId)
        const exist= await Conversation.findOne({
            members:{
                $all:[senderId,receiverId]
            },
            userId:senderId
        })
        if(exist){
            console.log("conversation already exists")
            res.status(200).json("Conversation already exists");
        }
        else{
            let newConversation=new Conversation({
                userId:senderId,
                members:[senderId, receiverId]
            })
            await newConversation.save();
             newConversation=new Conversation({
                userId:receiverId,
                members:[receiverId, senderId]
            })
            await newConversation.save();
            res.status(200).json("new conversation has been set ")
        }

    }
    catch(error){
        console.log("error while  setting up new conversation ", error.message);
        res.status(500).json({msg:error.message});
    }
}



export const getConversations=async (req,res)=>{
    //  console.log("request from frontend of all friends ", req.params)
    try{
        const users=await Conversation.find({userId:req.params.id});
        // console.log("9348 ", users);
        return res.status(200).json(users);
    }
    catch(error){
        console.log("error while getting all conversation ", error.message);
        res.status(500).json({msg:error.message});
    }
}

export const getConversation=async (req,res)=>{
    //  console.log("request from frontend is ", req.body)
    try{
        const senderId= req.body.senderId;
        const receiverId= req.body.receiverId
        const conversation=await Conversation.findOne({members:{$all:[senderId, receiverId] }});
        return res.status(200).json(conversation);
    }
    catch(error){
        console.log("error while getting conversation  ", error.message);
        res.status(500).json({msg:error.message});
    }
}

export const deleteConversation=async(req, res)=>{
    try{

    }
    catch(error){
        
    }
}


