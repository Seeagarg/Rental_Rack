import Socket from "../model/socket-schema.js";



// export const newSocketConnection= async(req,res)=>{
//     try{
//         const senderId=req.body.senderId;
//         const receiverId=req.body.receiverId;
//         const exist= await Socket.findOne({ })
//         if(exist){
//             res.status(200).json("Conversation already exists");
//         }
//         else{
//             let newConversation=new Conversation({
//                 userId:senderId,
//                 members:[senderId, receiverId]
//             })
//             await newConversation.save();
//              newConversation=new Conversation({
//                 userId:receiverId,
//                 members:[receiverId, senderId]
//             })
//             await newConversation.save();
//             res.status(200).json("new conversation has been set ")
//         }

//     }
//     catch(error){
//         console.log("error while  setting up new conversation ", error.message);
//         res.status(500).json({msg:error.message});
//     }
// }


export const addUser1= async(req, res)=>{
      console.log("req is ", req, "response is ", res);
    try{
           // console.log("data from frontend is ", req.body);        
           const exist= await Socket.findOne({userId:req._id});
           if(exist){
               return {msg:"already exist"};
           }
            //  console.log("user us ",user)
            req.socketId=res
           const newUser= new Socket(req);
           await newUser.save();

    console.log("new user is ", newUser);
      return {msg:"added successfully"}
   

                       
            //    return  res.status(200).json(newUser);

    }
    catch(error){
        console.log("error while  setting up new conversation ", error.message);
            //    res.status(500).json({msg:error.message});

    }
}




export const getUser1= async(id)=>{
      try{      
             //   console.log("id333 ",id)
                const data= await Socket.findOne({_id:id});
                // console.log("data is ---> ", data);
                return data
      }
      catch(error){
        console.log("error while getting user ", error.message);
        
      }
}
