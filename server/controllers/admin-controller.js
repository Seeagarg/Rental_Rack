import Admin from "../model/admin-schema"
import Jwt from "jsonwebtoken"


const jwtKey="crew-rental"
export const adminSignup= async(req, res)=>{
    try{        
        const exist= await Admin.findOne({email:req.body.email});
        if(exist){
            return res.status(401).json({message:'Email already exists'});
        }
        let admin=req.body;
        console.log("admin is ",admin);

          const pass=await bcrypt.hash(admin.password,10);
          admin.password=pass;

          console.log("user us ",admin)
            

        const newAdmin= new Admin(admin);
        await newAdmin.save();

        // let token=Jwt.sign()

        Jwt.sign({user},jwtKey,{expiresIn:"5h"},(err, token)=>{
                    
            return  res.status(200).json({newAdmin,auth:token});
        })
        


        // res.status(200).json({message:newUser});
    }
    catch(error){
        console.log("error while registeration ", error.message)
        res.status(500).json({message:error.message});
    }     
} 

export const verifyAdmin= async( req, res)=> {
     try{
        const exist= await Admin.findOne({email:req.params.key})
        
        res.send(exist)     
     }
     catch(error){  
        console.log("Error while verifying registeration ", error.message);
     }
}



export const adminLogin= async(req, res)=>{
        try{
        
            const email=req.body.email;

            const admin=await Admin.findOne({email:req.body.email});

            // console.log("user lohin is ",user);

            if(admin){
                const password=await bcrypt.compare(req.body.password,user.password)
            console.log("password is,", password);
            console.log("user is ",admin);
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



