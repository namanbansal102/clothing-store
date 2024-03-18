import { faL } from "@fortawesome/free-solid-svg-icons";
import connectDb from "../../../../middleware/mongoose"
import Products from "../../../../models/Products"
import ProductsWomen from "../../../../models/ProductsWomen";
import ProductsKids from "../../../../models/ProductsKids";
import ProductsBrand from "../../../../models/ProductsBrand";
import ProductsBeauty from "../../../../models/ProductsBeauty";

export async function POST(req,res){
    try{
   
        const {slug} =await req.json();
        console.log("Slug In My Query is is is is is is::::::::",slug);
        //connecting with mongodb
        let myquery=slug['product-name'].split("-").join(" ");
        console.log("My Query is:::::::::::::::::::::::::::::::",myquery);
        const type=slug['fashion-name']
        console.log("My Type is:::::::::::::::::::::::::::::::",type);
        // Finding my query
        let query=null;
        if (type=='men') {
            query = Products.findOne({ 'slug': myquery });
        }
        else if (type=='women') {
            query = ProductsWomen.findOne({ 'slug': myquery });
        }
        else if (type=='kids') {
            query = ProductsKids.findOne({ 'slug': myquery });
        }
        else if (type=='beauty') {
            query = ProductsBeauty.findOne({ 'slug': myquery });
        }
        else if (type=='brand') {
            console.log("brand Condtion Running ::::::::");
            query = ProductsBrand.findOne({ 'slug': myquery });
        }
            // selecting the `name` and `occupation` fields
            query.select('title slug desc img category size color price quantity');
            // execute the query at a later time
            const myproduct = await query.exec();
            console.log("myproduct Returned is:::::::::::::::::::::::",myproduct);
        return Response.json({status:true,myproduct},{status:200})
    }
    catch(error){
        console.log("Error Founded",error);
        return Response.json({status:false},{status:400})
    }

}