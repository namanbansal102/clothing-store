const mongoose=require("mongoose")
const ProductsSchema=new mongoose.Schema({
    title:{type:String,required:true},
    slug:{type:String,required:true},
    desc:{type:String,required:true},
    img:{type:String},
    category:{type:String,required:true},
    size:{type:String,default:'L'},
    color:{type:String},
    price:{type:Number,required:true},
    quantity:{type:String,required:true,default:1},

},{timestamps:true})
// Not For Recompiling The Module
mongoose.models={}
export default mongoose.model("ProductsKids",ProductsSchema)