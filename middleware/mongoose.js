import mongoose from "mongoose";
const connectDb=async()=>{
    try{

        await mongoose.connect("mongodb://localhost:27017/westside",{
            useNewUrlParser:true,
        })
        console.log("Mongo DB Connected");
    }
    catch(error){
        console.log("Error Connecting To MongoDb",error);
    }
}
export default connectDb