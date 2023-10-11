import Contractor from "../model/contractor-schema.js"
import Jwt  from "jsonwebtoken";


const jwtKey="crew-rental";

export const contractorRegister=async( req, res)=>{
        try{

            console.log("contractor info from frontend ", req.body);
            const newContractor=  new Contractor(req.body);
            await  newContractor.save();

            console.log("new contractor is ", newContractor);
         
            Jwt.sign({newContractor},jwtKey,{expiresIn:"5h"},(err,token)=>{
               return res.status(200).json({newContractor,auth:token});
            })
        }
        catch(error){
                console.log("Error is contractor registeration ", error.message)
                res.status(500).json({message:error.message});
        }
}

export const getAllContractors=async(req, res)=>{
  try{
        const  result=await Contractor.find();
        console.log("Data of all contractor ", result);
        res.status(200).json(result);
  }
  catch(error){
        console.log("Error while getting all contractor ", error.message);
        res.status(500).json({message:error.message});
  }
}

export const updateContractor= async(req, res)=>{
       console.log("data from frontedn s  ", req.body)
      try{
            const data= await Contractor.updateOne({_id:req.params.id},{
                  $set:req.body
            })

            res.status(200).json(data)
      }
      catch(error){
            console.log("error while updating controcator profile ",error.message);
            res.status(500).json({msg:error.message});
      }
}

export const deleteContractor=async(req, res)=>{
      try{
            const result=await Contractor.findByIdAndDelete({_id:req.params.id});
            res.status(200).json(result);
      }
      catch(error){
            console.log("error while deleting contractor ", error.message);
            res.status(500).json({msg:error.message});
      }
}

export const getContractor=async(req,res)=>{
      // console.log("params is ", req.params)
     try{
      const user= await Contractor.findOne({"$or":[
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
  







