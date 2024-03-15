import connectDb from "../../../../middleware/mongoose"
import Products from "../../../../models/Products"
import { NextResponse } from "next/server";
import ProductsWomen from "../../../../models/ProductsWomen";
export async function GET(req,res){
    const query=req.url.split("=")[1]
    console.log("My Request is This this this is:::::::::::",query);
    await connectDb();
    let products=null;
    if (query=='men') {
         products=await Products.find()
    }
    else if (query=='women') {
        products=await ProductsWomen.find()
    }
    else if (query=='kids') {
        // After That Also Making Product Page For Kids
        products=await ProductsWomen.find()
    }
    else if (query=='beauty') {
        // After That Also Making beauty page
        products=await ProductsWomen.find()
    }
    else if (query=='brand') {
        // After That Also Making beauty page
        products=await ProductsWomen.find()
    }
   
    return NextResponse.json({products})
}