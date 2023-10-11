import User from "../model/user-schema.js";
import Jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";




const jwtKey="crew-rental"




export const userSignup= async(req, res)=>{
    try{

        // console.log("data from frontend is ", req.body);        
        const exist= await User.findOne({email:req.body.email});
        if(exist){
            return res.status(401).json({message:'Email already exists'});
        }
        let user=req.body;
        console.log("user is ",user);

          const pass=await bcrypt.hash(user.password,10);
          user.password=pass;

          console.log("user us ",user)
            

        const newUser= new User(user);
        await newUser.save();

        Jwt.sign({user},jwtKey,{expiresIn:"5h"},(err, token)=>{
                    
            return  res.status(200).json({newUser,auth:token});
        })
        // res.status(200).json({message:newUser});
    }
    catch(error){
        console.log("error while registeration ", error.message)
        res.status(500).json({message:error.message});
    }     
} 

export const verifyUser= async( req, res)=> {
        // console.log("Data for registeration verification is " , req.params.key);
     try{
        const exist= await User.findOne({email:req.params.key})
        // console.log("verification result is ",exist);
        res.send(exist)     
     }
     catch(error){  
        console.log("Error while verifying registeration ", error.message);
     }
}



export const userLogin= async(req, res)=>{
        try{
            console.log("data from front is ",req.body);
            const email=req.body.email;

            const user=await User.findOne({email:req.body.email});

            console.log("user lohin is ",user);

            if(user){
                const password=await bcrypt.compare(req.body.password,user.password)
            // const user= await User.findOne({email:req.body.email, password:req.body.password}).select("-password");

            console.log("password is,", password);
            console.log("user is ",user);
            if(password){
                Jwt.sign({user},jwtKey,{expiresIn:"5h"},(err, token)=>{
                    return  res.status(200).json({user,auth:token});
                })
            }
            else{
                return res.status(401).json('Invalid login'); 
         }

            }
            else{
                return res.status(401).json('Invalid login'); 
         }
        }
        catch(error){
                    console.log("error while login ",error.message )
                    res.status(500).json('Error ', error.message);
        }
}

export const verifyEmail= async(req, res)=>{
    console.log("email is ", req.body);
    try{
        const email=await User.findOne({email:req.body.email});
        console.log("email is ", email);
        if(email){
            return  res.status(200).json({data:email});
        }
        else{
            return  res.status(401).json('Invalid email')
        }
    }
    catch(error){
        console.log("error while email verification ",error.message )
        res.status(500).json('Error ', error.message);
    }
}
export const updatePassword=async(req, res)=>{
        console.log("req  for update is ", req.body);
        try{
              const password=await bcrypt.hash(req.body.password, 10);
            let result= await User.updateOne(
                {email:req.body.email},
                {
                    $set : {password: password}
                }
                    )
                console.log("result is ",result)
               const user=await User.findOne({email:req.body.email})
               if(user){
                
                Jwt.sign({user},jwtKey,{expiresIn:"5h"},(err, token)=>{
                    
                    return  res.status(200).json({user,auth:token});
                })
            }    
        }
        catch(error){
            res.status(500).json("Invaild operation");
        }
} 



export const getUser=async(req,res)=>{
    // console.log("params is ", req.params)
   try{
    const user= await User.findById({_id:req.params.id})
    res.status(200).json(user);

   }
   catch(error){
    console.log("error while getting user data ", error.message);
    res.status(500).json({error:error.message});
   }
}


export const updateRole=async(req,res)=>{
     try{
            const data=await findByIdAndUpdate({_id:req.body.userId},{$set:{role:req.body.role}})
            res.status(200).json(data);    
     }
     catch(error){
        res.status(500).json({msg:error.message})
     }
}


