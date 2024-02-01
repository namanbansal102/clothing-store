import connectDb from "../../../../middleware/mongoose"
import User  from "../../../../models/User"
import { NextResponse } from "next/server";
var CryptoJS = require("crypto-js");
const jwt=require('jsonwebtoken')
export async function POST(request,response){
    try{
        
        let make=await request.json()
        console.log(make);
        let img="https://cdn-icons-png.flaticon.com/128/1077/1077012.png"
        if (make.img!=undefined) {
            img=make.img
        }
        var cipherpass = CryptoJS.AES.encrypt(make.password, 'naman#$%@@#!221323%6namanbansal@#EF').toString();
        await connectDb();
        let u=new User({
            name:make.name,
            email:make.email,
            password:cipherpass,
            img:img
        })
        await u.save();
        const token=jwt.sign({success:true,email:make.email,name:make.name},'namansecretjwtsecret')
        return Response.json({success:true,token},{status:200})
    }catch(error){
        console.log(error);
        return Response.json({success:false},{status:400})
    }
        
        
    }