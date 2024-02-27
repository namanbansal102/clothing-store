import connectDb from "../../../../middleware/mongoose"
import Orders from "../../../../models/Orders"
import Products from "../../../../models/Products"
export async function POST(req,res){
    try{
        const {orderId} =await req.json(); 
        await connectDb();
        console.log(orderId,"::::::::::::::::::::myslug myslug myslug");
        // connecting with mongodb
        const arrPrd=[]
        // Finding my query
        const query = Orders.findOne({OrderId:orderId});

            // selecting the `name` and `occupation` fields
            query.select('userEmail products amount status');
            
            // execute the query at a later time
            const myuser = await query.exec();
            for(let i=0;i<myuser['products'].length;i++){
                const findPdr=Products.findOne({_id:((myuser['products'])[i])['productId']});
                findPdr.select('title price');
                const mypdr = await findPdr.exec();
                arrPrd.push(mypdr);

            }
            
            // console.log("Under Server Side ........................",myproduct);
        return Response.json({status:true,productInfo:arrPrd,userInfo:myuser},{status:200})
    }
    catch(error){
        console.log("Error Founded",error);
        return Response.json({status:false},{status:400})
    }

}