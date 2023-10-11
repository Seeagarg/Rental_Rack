import cloudinary from "cloudinary";


export const profileImageUploader=async(pic)=>{
   try{

    const myCloud = await cloudinary.v2.uploader.upload(pic, {
        folder: "profilePic",
      });
      return  myCloud.secure_url ;
   }
   catch(error){
    console.log("error in uploading image ", error.message);
   }
}


export const aadharUploader= async(pic)=>{
   try{

    const myCloud = await cloudinary.v2.uploader.upload(pic, {
        folder: "aadharPic",
      });

      return  myCloud.secure_url ;
   }
   catch(error){
      console.log("error is ", error.message);   
   }
}