import mongoose from "mongoose";


const orderItemSchema = new mongoose.Schema({
     item : {
          type : mongoose.Schema.Types.ObjectId,
          ref : "Product"
     },
     quantity : {
          type : Number,
          default : 0
     }
},)


const orderSchema = new mongoose.Schema(
     {
          // customer, [product,quantity], status, 
          customer : {
               type : mongoose.Schema.Types.ObjectId,
               ref : "User"
          },
          items : [orderItemSchema],
          status : {
               type : String,
               enum : ["Pending","Delivered","Cancelled"],
               default : "Pending"
          }
     },
     { timestamps : true }
)
export const Order = mongoose.model("Order",orderSchema);