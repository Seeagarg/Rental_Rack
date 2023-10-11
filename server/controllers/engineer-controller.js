import Engineer from "../model/engineer-schema.js";
export const addEngineer=async( req, res)=>{
        try{
            const newEngineer=  new Engineer(req.body);
            await  newEngineer.save();
            // console.log("new engineer is ", newEngineer);
               return res.status(200).json({newEngineer});
        }
        catch(error){
                console.log("Error is engineer registeration ", error.message)
                res.status(500).json({message:error.message});
        }
}

export const getAllEngineers=async(req, res)=>{
  try{
        const  result=await Engineer.find();
      //   console.log("Data of all engineer ", result);
        res.status(200).json(result);
  }
  catch(error){
        console.log("Error while getting all engineer ", error.message);
        res.status(500).json({message:error.message});
  }
}
export const updateEngineer = async(req, res)=>{
      try{
            const data= await Engineer.updateOne({_id:req.params.id},{
                  $set:req.body
            })
            res.status(200).json("updated engineer")
      }
      catch(error){
            console.log("error while updating engineer profile ",error.message);
            res.status(500).json({msg:error.message});
      }
}

export const deleteEngineer=async(req, res)=>{
      try{
            const result=await Engineer.findByIdAndDelete({_id:req.params.id});
            res.status(200).json(result);
      }
      catch(error){
            console.log("error while deleting engineer ", error.message);
            res.status(500).json({msg:error.message});
      }
}

export const getEngineer=async(req,res)=>{
      // console.log("params is ", req.params)
     try{
      const user= await Engineer.findOne({"$or":[
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
      console.log("error while getting engineer data ", error.message);
      res.status(500).json({error:error.message});
     }
  }
  