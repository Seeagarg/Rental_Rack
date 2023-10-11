import mongoose from "mongoose";

const ProjectSchema= new mongoose.Schema({
    userId:{
        type:String
    },
    title:{
        type:String,
        minlength:3
    },
    description:{
        type:String
    }
})

const project=mongoose.model("project",ProjectSchema);
export default project;