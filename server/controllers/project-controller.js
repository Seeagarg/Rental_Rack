import Project from "../model/project-schema.js";


export const addProject= async(req, res)=>{

    console.log("project detail from fronetend ",req.body)
    try{
           let data=new Project(req.body);
            data= await data.save();
            res.status(201).json(data);
    }
    catch(error){
        console.log("Error while adding a project ", error.message);
        res.status(500).json({msg:error.message});
    }
}

export const getProjects=async(req,res)=>{
    try{
        console.log("id ", req.params.id)
        const data= await Project.find({userId:req.params.id});
        res.status(200).json(data);

    }
    catch(error){
        console.log("error while getting a project ", error.message)
        res.status(500).json({msg:error.message});
    }
}

export const deleteProject=async(req,res)=>{
    try{
        const result=await Project.findByIdAndDelete({_id:req.params.id});
        res.status(200).json(result);
    }
    catch(error){
        console.log("Error while deleting project ", error.message);
        res.status(500).json({msg:error.message})
    }
}