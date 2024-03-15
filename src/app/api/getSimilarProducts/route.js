import connectDb from "../../../../middleware/mongoose"
import Products from "../../../../models/Products"
import ProductsWomen from "../../../../models/ProductsWomen";
export async function POST(req,res){
    try{
        await connectDb();
        let data=await req.json()
        console.log("Get Similar Function Running main is main is main is main is main:::::::::::::::::::::::::::::::::",data);
        let type=((data.data)['slug'])['fashion-name']
        data=(data.data)['product']['category']
        const k=[]
        console.log("Data is Server Side is::",data);
        let query=null;
        if (type=='men') {
            query = Products.find({ 'category':data});
        }
        else if (type=='women') {
            query = ProductsWomen.find({ 'category':data});
        }
        else if (type=='beauty') {
            query = ProductsWomen.find({ 'category':data});
        }
        else if (type=='brand') {
            query = ProductsWomen.find({ 'category':data});
        }
        query.select('title slug img category size color price quantity');
        let myproduct = await query.exec();
        console.log("MyProduct is is is si is is is sis is sis sis is sis si:",myproduct);
          
        return Response.json({status:true,myproduct},{status:200})
    }
    catch(error){
        console.log("Error Founded",error);
        return Response.json({status:false,error:error},{status:400})
    }

}