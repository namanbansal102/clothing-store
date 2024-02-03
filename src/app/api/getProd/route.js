import connectDb from "../../../../middleware/mongoose"
import Products from "../../../../models/Products"
export async function POST(req,res){
    try{
        await connectDb();
        let data=await req.json()
            const query = Products.findOne({ '_id': data['id'] });
            query.select('title img category size color price quantity');
            const myproduct = await query.exec();
        // console.log("Under Server Side ........................",myproduct);
        return Response.json({status:true,myproduct},{status:200})
    }
    catch(error){
        console.log("Error Founded",error);
        return Response.json({status:false,error:error},{status:400})
    }

}