import { faL } from "@fortawesome/free-solid-svg-icons";
import connectDb from "../../../../middleware/mongoose"
import Products from "../../../../models/Products"
import ProductsWomen from "../../../../models/ProductsWomen";

export async function POST(req,res){
    try{
   
        const {slug} =await req.json();
        //connecting with mongodb
        await connectDb();
        let myquery=slug['product-name'].split("-").join(" ")
        const type=slug['fashion-name']
        // Finding my query
        let query=null;
        if (type=='men') {
            query = Products.findOne({ 'slug': myquery });
        }
        else if (type=='women') {
            query = ProductsWomen.findOne({ 'slug': myquery });
        }
        else if (type=='kids') {
            query = Products.findOne({ 'slug': myquery });
        }
        else if (type=='beauty') {
            query = Products.findOne({ 'slug': myquery });
        }
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