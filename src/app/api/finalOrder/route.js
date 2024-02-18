import connectDb from "../../../../middleware/mongoose"
import Products from "../../../../models/Products"
export async function POST(req,res){
    try{
        await connectDb();
        let total=0
        let data=await req.json()
        data=data['id']
        const k=[]
        console.log("Data is Server Side is::",data);
            for(let i=0;i<data.length;i++){

                let value=(data[i])['value']
                let name=(data[i])['name']

                console.log("Value in For Loop is:",value);
                name=name.split("_")
                let parsedNum=Number(name[1])
                value=value.split('"');
                value=value[1];
                
                const query = Products.findOne({ '_id': value });
                query.select('title img category size color price quantity');
                let myproduct = await query.exec();
                total+=parsedNum*myproduct['price']
                k.push(myproduct)
            }
        
        console.log("Under Server Side ........................",k);
        return Response.json({status:true,items:k,total},{status:200})
    }
    catch(error){
        console.log("Error Founded",error);
        return Response.json({status:false,error:error},{status:400})
    }

}