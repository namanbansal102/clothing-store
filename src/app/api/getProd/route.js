import connectDb from "../../../../middleware/mongoose"
import Products from "../../../../models/Products"
export async function POST(req,res){
    try{
        console.log("api Fetched ..................................");
        await connectDb();
        let arr=[]
        console.log("1st line ...................");
        
        let idArr=await req.json()
        console.log("2nd line ...................");
        console.log("id is-------------------------------------------------------------",idArr);
        idArr=idArr['arr']
        for (let i = 0; i < idArr.length; i++) {
            console.log("id is---------------------",idArr[i]);
            let id = (idArr[i])['id'];
            
            //connecting with mongodb
            
            // Finding my query
            
            const query = Products.findOne({ '_id': id });
            query.select('title img category size color price quantity');
            const myproduct = await query.exec();
            arr.push(myproduct)
        }
            
        // console.log("Under Server Side ........................",myproduct);

        return Response.json({status:true,arr},{status:200})
    }
    catch(error){
        console.log("Error Founded",error);
        return Response.json({status:false,error:error},{status:400})
    }

}