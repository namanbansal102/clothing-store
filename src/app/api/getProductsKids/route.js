import connectDb from "../../../../middleware/mongoose"
import Products from "../../../../models/Products"
import { NextResponse } from "next/server";
export async function GET(req,res){
    await connectDb();
    let products=await Products.find()
    console.log(products);
    return NextResponse.json({products})
}