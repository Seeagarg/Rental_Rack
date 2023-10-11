import jwt from "jsonwebtoken";
const JWT_SECRET="crew-rental";


export const verifyUserToken=async(req,res,next)=>{
    // const token=req.header.token;
    // console.log("req toekn is ",req)
    const token=req.header("token")
    // console.log("req 121 ",req)
    // console.log("token is ",token)
    try{
    if(!token){
        res.status(401).json({error:"user is not authenticated"})
        return
    }
        // const data=jwt.verify(token,JWT_SECRET);
        // console.log("token is ",data )
        // req.user=data.user
        next();
    }
    catch(error){
        console.log("error while token verification ", error.message);
        res.status(401).json({msg:error.message})
    }
}