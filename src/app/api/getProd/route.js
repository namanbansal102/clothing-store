import connectDb from "../../../../middleware/mongoose"
import Products from "../../../../models/Products"
import ProductsWomen from "../../../../models/ProductsWomen";
export async function POST(req,res){
    try{
        await connectDb();
        let data=await req.json()
        data=data['id']
        const k=[]
        console.log("Data is Server Side is::",data);
            for(let i=0;i<data.length;i++){
                let value=(data[i])['value']
                let name=(data[i])['name']
                const type=name.split("_")[1]
                console.log("Value in For Loop is:",value);
                value=value.split('"');
                value=value[1];
                let query=0; 
                if (type=="men") {
                    query = Products.findOne({ '_id': value });  
                }
                if (type=="women") {
                    query = ProductsWomen.findOne({ '_id': value });  
                }
                if (type=="kids") {
                    query = Products.findOne({ '_id': value });  
                }
                if (type=="beauty") {
                    query = Products.findOne({ '_id': value });  
                }
                query.select('title img category size color price quantity');
                let myproduct = await query.exec();
                k.push(myproduct)
            }
        
        console.log("Under Server Side ........................",k);
        return Response.json({status:true,k},{status:200})
    }
    catch(error){
        console.log("Error Founded",error);
        return Response.json({status:false,error:error},{status:400})
    }

}