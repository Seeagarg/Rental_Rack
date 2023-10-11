import WorkerGroup from "../model/workerGroup-schema.js";

export const addWorkerGroup=async( req, res)=>{
        try{
            const newWorkerGroup=  new WorkerGroup(req.body);
            await  newWorkerGroup.save();
            // console.log("new contractor is ", newContractor);
               return res.status(200).json({newWorkerGroup});
        }
        catch(error){
                console.log("Error in group worker registeration ", error.message)
                res.status(500).json({message:error.message});
        }
}

export const getAllWorkerGroup=async(req, res)=>{
  try{
        const  result=await WorkerGroup.find();
        console.log("Data of all worker group ", result);
        res.status(200).json(result);
  }
  catch(error){
        console.log("Error while getting all  group worker ", error.message);
        res.status(500).json({message:error.message});
  }
}
export const updateGroupWorker = async(req, res)=>{
      try{
            const data= await WorkerGroup.updateOne({_id:req.params.id},{
                  $set:req.body
            })
            res.status(200).json(data)
      }
      catch(error){
            console.log("error while updating group worker profile ",error.message);
            res.status(500).json({msg:error.message});
      }
}
export const deleteGroupWorker=async(req, res)=>{
      try{
            const result=await WorkerGroup.findByIdAndDelete({_id:req.params.id});
            res.status(200).json(result);
      }
      catch(error){
            console.log("error while deleting engineer ", error.message);
            res.status(500).json({msg:error.message});
      }
}
export const getGroupWorker=async(req,res)=>{
    // console.log("params is ", req.params)
   try{
    const user= await WorkerGroup.findOne({"$or":[
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
    console.log("error while getting group worker data ", error.message);
    res.status(500).json({error:error.message});
   }
}

