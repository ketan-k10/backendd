import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     username:{
          type:String,
          required:true,
          unique:true,
          lowercase : true
     },
     email:{
          type:String,
          required:true,
          unique:true,
          lowercase : true
     },
     password:{
          unique :true,
          required:true
     }
},{timestamps:true})

export const User = mongoose.Model("User",userSchema)