
// import { filterWorker } from "../../client/src/service/api.js";
import Worker from "../model/worker-schema.js";
import Jwt  from "jsonwebtoken";
// import { sendMail } from "./sendMail-controller.js";
import { updateRole } from "./user-controller.js";
import { aadharUploader, profileImageUploader } from "../utils/imageUploader.js";

const jwtKey="crew-rental";
const url="http://localhost:8000"


export const workerRegister= async(req, res)=>{ 
 
    
    // const res=await updateRole(req,res);

    try{
        // console.log("Worker Data front end is ", req.body);
        // sendMail(req,res);


       

        const {fullName}= req.body;

        console.log("full name is ", fullName);

        let  {profilePic,aadharPic}=req.body;
         

           profilePic=await profileImageUploader(profilePic);

            aadharPic= await aadharUploader(aadharPic);

            // console.log("aadhar pic ",aadharPic);
            // console.log("pfeoj  ",profilePic);

            req.body.profilePic=profilePic;
            req.body.aadharPic=aadharPic;
         const newWorker=new Worker(req.body);
         await newWorker.save()  

         console.log("new Worker is ", newWorker);
      
         
         Jwt.sign({newWorker},jwtKey,{expiresIn:"5h"},(err,token)=>{
            return res.status(200).json({newWorker,auth:token});
         })
    }
    catch(error){
        console.log("error while worker register ", error.message);
        res.status(500).json({message:error.message});
    }
}
export const getAllWorkers=async(req, res)=>{
      // console.log("get all worker is called")
      try{
        const result=await Worker.find();
            // console.log("Data from workers table are ", result);
        res.status(200).json(result);
        //   res.send(result);
      }
      catch(error){
        console.log("Error while getting all workes  from db ", error.message);
        res.status(500).json({message:error.message});
      }
}


export const getWorker=async(req,res)=>{
    // console.log("params is ", req.params)
   try{
    const user= await Worker.findOne({"$or":[
      {
          email:req.params.id
      },
        {
          _id:req.params.id
        },
        {
          userId:req.params.id
        }
    ]
  })


    res.status(200).json(user);

   }
   catch(error){
    console.log("error while getting user data ", error.message);
    res.status(500).json({error:error.message});
   }
}




export const filterWorker=async(req,res)=>{
  //  console.log("req from frontend is ", req.params)
  try{
    const result=await Worker.find({role:req.params.id1, experience:req.params.id4, price:req.params.id3, address:req.params.id2})
     console.log("result is ", result)
    res.status(200).json(result)
  }
  catch(error){
    res.status(500).json({msg:error.message})
  }
}
export const updateWorker= async(req, res)=>{
      try{
        const data=await Worker.updateOne({_id:req.params.id},{
          $set: req.body
        })

         res.status(200).json("updated successfully"); 

      }
      catch(error){
         console.log("error while updating worker profile ", error.message);
      }
}

//delete a worker

export const  deleteWorker=async(req,res)=>{
  try{
      const result= await Worker.findByIdAndDelete({_id:req.params.id});
      console.log("delete result is ", result);
      res.status(200).json(result);
  }
  catch(error){
    console.log("error while deleting a worker ", error.message);
    res.status(500).json({msg:error.message})
  }
}













