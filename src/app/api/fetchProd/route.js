import { faL } from "@fortawesome/free-solid-svg-icons";
import connectDb from "../../../../middleware/mongoose"
import Products from "../../../../models/Products"

export async function POST(req,res){
    try{
   
        const {slug} =await req.json(); 

        
        //connecting with mongodb
        await connectDb();
        let myquery=slug.split("-").join(" ")
        
        // Finding my query
        const query = Products.findOne({ 'slug': myquery });

            // selecting the `name` and `occupation` fields
            query.select('title slug desc img category size color price quantity');

            // execute the query at a later time
            const myproduct = await query.exec();
            
           
        return Response.json({status:true,myproduct},{status:200})
    }
    catch(error){
        console.log("Error Founded",error);
        return Response.json({status:false},{status:400})
    }

}