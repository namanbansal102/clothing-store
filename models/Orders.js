const mongoose=require("mongoose")
const OrderSchema=new mongoose.Schema({
    userEmail:{type:String,required:true},
    OrderId:{type:String,required:true},
    products:[
        {productId:{type:String,required:true}
    ,quantity:{type:Number,required:true,default:1}}
    ],
    address:{type:String,required:true},
    amount:{type:String,required:true},
    status:{type:String,required:true,default:"pending"}
},{timestamps:true})

// Not For Recompiling The Module
mongoose.models={}

export default mongoose.model("Orders",OrderSchema)