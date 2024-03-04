import connectDb from "../../../../middleware/mongoose"
import Products from "../../../../models/Products"
export async function POST(req,res){
    try{
        await connectDb();
        let data=await req.json()
        console.log("Get Similar Function Running main is main is main is main is main",data);
        data=(data.data)['category']
        const k=[]
        console.log("Data is Server Side is::",data);
                const query = Products.find({ 'category':data});
                query.select('title slug img category size color price quantity');
                let myproduct = await query.exec();
                
          
        return Response.json({status:true,myproduct},{status:200})
    }
    catch(error){
        console.log("Error Founded",error);
        return Response.json({status:false,error:error},{status:400})
    }

}