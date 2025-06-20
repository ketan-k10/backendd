//practice: - 
//! import mongoose from "mongoose";
//import mongoose
//! const userSchema = new mongoose.Schema({})
// make new Schema which takes object use new key word.

//? inside the object define varibles like variable : {write properties}
//? properties like  : ==> type : String, required: true, default:true, or example required:[true,"Password is required"]

//? and a special type of  property is :==> having reference of another model its done like  =>
//?  define type first and type to be :==> type : mongoose.Schema.Types.ObjectId, then you will get access to ref property
//? and then use ref property and write Model name you are reffering ex ==> ref : "User".

//! export const User = mongoose.model("User",userSchema)
// export schema than only it will be made in mongodb
// the format of exporting should be variable with first letter capital and try to have both export 
// variable name and schema name same and mongoose.model() will take two arguments 1st is name of model u r making, and 2nd on basis of what 
// schema you are building.   

// for example model name here is User but in mogodb it will be stored as users in plural.



import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
     {
          username : {
               type : String,
               required : true,
               unique : true,
               lowercase: true
          },
          email : {
               type : String,
               lowercase : true,
               unique : true,
          },
          password: {
               type: String,
               required: [true,"Password is required"]
          }
     },
     {
          timestamps : true
     }
);

export const User = mongoose.Model("User",userSchema);


















