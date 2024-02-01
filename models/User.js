const mongoose=require("mongoose")
const UsersSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    img:{type:String,default:"https://cdn-icons-png.flaticon.com/128/1077/1077012.png"},
    orders:[{type:Object,default:0}]

},{timestamps:true})
// Not For Recompiling The Module
mongoose.models={}
export default mongoose.model("User",UsersSchema)