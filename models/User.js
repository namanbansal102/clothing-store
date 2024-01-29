const mongoose=require("mongoose")
const UsersSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    img:{type:String},

},{timestamps:true})
export default mongoose.model("User",UsersSchema)