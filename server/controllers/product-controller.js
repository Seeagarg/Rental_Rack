import { request } from "express";
import Product from "../model/product-schema.js";

export const addProduct= async(req,res)=>{
  try{
    let newProduct=new Product(req.body);
      newProduct=await newProduct.save();
      res.status(201).json({newProduct});
  }
  catch(error){
    console.log("error while storing new product ", error.message);
      res.status(500).json({msg:error.message});
  }
}

export const  getAllProducts=async(req, res)=>{
    try{
            let result=await Product.find();
                res.status(200).json(result);
    }
    catch(error){
        console.log("error while getting all products ", error.message);
        res.status(500).json({msg:error.message});
    }
}


export const getProduct= async(req,res)=>{
    try{
         console.log("param is ", req.params.key)
      //   let result= await Product.find({
      //       "$or":[
      //         {
      //             price:{$regex:req.params.key}
      //         }, 
      //         {
      //             category:{$regex:req.params.key}
      //         },
      //         {
      //             _id:{$regex:req.params.key}
      //         }
      //       ]
      // });


      let result= await Product.findOne({_id:req.params.id});


      console.log("res is ",result);
      res.status(200).json(result); 
    }
    catch(error){
        console.log("Error in filterring product ", error.message);
        res.status(500).json({msg:error.message});
    }
}

export const updateProduct=async(req,res)=>{
  try{
    console.log("req id is ", req.params.id)
    let result= await Product.updateOne(
      {_id:req.params.id},
      {
          $set:req.body
      }
          )
          res.status(200).json(result)
  }
  catch(error){
    console.log("error while updating product", error.message);
    res.status(500).json({msg:error.message});
  }
}

export const filterProduct=async(req,res)=>{
  console.log("req from frontend is ", req.params)
 try{
   const result=await Product.find({category:req.params.id1, company:req.params.id2, price:req.params.id3})
    console.log("result is ", result)
   res.status(200).json(result)
 }
 catch(error){
   res.status(500).json({msg:error.message})
 }
}

export const deleteProduct=async(req, res)=>{
   try{
          const result=await Product.findByIdAndDelete({_id:req.params.id});
          res.status(200).json(result);
   }
   catch(error){
    console.log("error while deleting product ");
    res.status(500).json({msg:error.message});
   }
}


