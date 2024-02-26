import connectDb from "../../../../middleware/mongoose"
import Products from "../../../../models/Products"
import { NextResponse } from "next/server";
import ProductsWomen from "../../../../models/ProductsWomen";
export async function GET(req,res){
    await connectDb();
    let products=await ProductsWomen.find()
    console.log(products);
    return NextResponse.json({products})
}