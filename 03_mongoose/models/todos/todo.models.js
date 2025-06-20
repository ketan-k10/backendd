import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
     {
          content:{
               type : String,
               required :true,
          },
          complete: {
               type: Boolean,
               default : false
          },
          createdBy: {
               type : mongoose.Schema.Types.ObjectId,
               ref : "User"
          },
          subTodo :[
               {
                    type : mongoose.Schema.Types.ObjectId,
                    ref : "SubTodo"
               }
          ]
          //array of subtodo means its type is array and
          // each element in that array has following variables and corresponding properties
     },
     {
          timestamps:true
     }
);

export const Todo = mongoose.Model("Todo",todoSchema);