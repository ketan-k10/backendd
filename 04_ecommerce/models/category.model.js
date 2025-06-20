import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
     name : {
          type : String,
          enum : ["Furniture","Books","Elctronics","Gadgets"],
          default : "Books",
          required : true
     }

},{timestamps : true});

export const Category  =  mongoose.model("Category",categorySchema);