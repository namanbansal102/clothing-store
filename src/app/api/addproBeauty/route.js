import connectDb from "../../../../middleware/mongoose"
import { NextResponse } from "next/server";
import ProductsBeauty from "../../../../models/ProductsBeauty";
export async function POST(request,response){
    try{

        let make=await request.json()
        console.log(make);
        await connectDb();
        let p=new ProductsBeauty({
            title:make.title,
            slug:make.slug,
            desc:make.desc,
            img:make.img,
            category:make.category,
            size:make.size,
            color:make.color,
            price:make.price,
            quantity:make.quantity
        })
        await p.save();
        return Response.json({success:true})
    }catch(error){
        console.log(error);
        return Response.json({success:false})
    }
        
        
    }