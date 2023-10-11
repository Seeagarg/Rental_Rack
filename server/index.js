import express from "express"
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Route from './routes/route.js'
import { Connection } from "./database/db.js";
import { Server } from "socket.io";
import Socket from "./model/socket-schema.js";


import fileUpload   from "express-fileupload";

//for image
import cloudinary from "cloudinary";


// import ws from "ws";
import { addUser1, getUser1 } from "./controllers/socket-controller.js";


const app=express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(fileUpload({useTempFiles: true}));



cloudinary.config({ 
    cloud_name: 'ddwsaojx6', 
    api_key: '587976562268743', 
    api_secret: 'NeHT8ah8XKesceHZSjuw5BtIMOI' 
  });


app.use("/",Route);

const PORT=8000

dotenv.config();

const USERNAME=process.env.DB_USERNAME
const PASSWORD=process.env.DB_PASSWORD





Connection(USERNAME,PASSWORD);

const URL="http://localhost:3000"
// const URL="https://rental-frontend.onrender.com/"

const server=app.listen(PORT, ()=>{
    console.log(`Server has been running on the port ${PORT}`) 
})





//socket code is here
const io=new Server(server,{
    cors:{
        origin:URL,
        credentials: true,
    }
})


let users=[];
const addUser=  (userData, socketId)=>{
    // const data = await Socket.findOne({userId:userData?._id});
    // console.log("kkkk --> ", data)
            // if(!data){
            //     // console.log("new user ", newuser)
            //      const newuser = await Socket({userId:userData?._id, socketId });
            //     //  console.log("new user ", newuser)
            //      const data = await newuser.save();
            // }
            !users.some(user=> user._id===userData?._id) && users.push({...userData, socketId});
            // console.log("active users ",users)
}


const removeUser= (socketId)=>{
    users=users.filter(user=>user.socketId!==socketId);
}


const getUser=(userId)=>{
    return users.find(user=> user._id=== userId)
}

io.on("connection",(socket)=>{
   

    socket.on("addUsers",  async(userData)=>{
        
        console.log("adding user ",userData)
        addUser(userData, socket?.id);

        const res=await  addUser1(userData,socket?.id)
     
       
        io.emit("getUsers", users);
    })
    // socket.on ('sendMessage',  async data =>{
    //     console.log("send Message data is ", data);
    //     const user= getUser(data.receiverId);

    //     const u=await getUser1(data?.receiverId);
    //     console.log("u is ", u);
    //     // console.log("user for socket is ", user);
    //     // console.log("total users ", users);
    //     try{
           
    //         console.log("user  match is is " , u)
    //         // io.to(user?.socketId).emit("getMessage", data);
    //         console.log("data is ", data)
    //         io.to(user?.socketId).emit("getMessage", data);
    //     }
    //     catch(error){
    //         console.log("error is ", error.message);
    //     }
    // })


    socket.on ('sendMessage',  async data =>{
        
        const user= getUser(data.receiverId);

        const u=await getUser1(data?.receiverId);
        

        try {
           
            io.to(user?.socketId).emit("getMessage", data);

            // Emit receiveMessage event to the sender of the message
            const sender = getUser(data.senderId);
            io.to(sender?.socketId).emit("receiveMessage", data);
        } catch (error) {
            console.log("error is ", error.message);
        }
    });

    socket.on('disconnect',()=>{
        removeUser(socket.id)
        console.log("some one has left")
    })
})



