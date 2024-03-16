let email,password,name,timejson,img=null;
var nodemailer = require('nodemailer');
import connectDb from "../../../../middleware/mongoose"
import User  from "../../../../models/User"
import { NextResponse } from "next/server";
var CryptoJS = require("crypto-js");
const jwt=require('jsonwebtoken')
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'namanbansal102@gmail.com',
      pass: 'wzxv qfku errq lzwm'
    }
  }); 
  let randomOtp=1;
let POST=async(request,response)=>{
  const min = 1000;
  const max = 9999;
  randomOtp = Math.floor(Math.random() * (max - min + 1)) + min;
    // if (email!=null) {
    //     let kop={"email":email,"password":password,"name":name,"timejson":timejson,"img":img}
    //     console.log("Value of kop kop is kop is::::::",kop);
    //     email=null;
    //     return kop;
    // }
    
    let make=await request.json();
    email=make.email;
    password=make.password;
    name=make.name;
    let date=new Date()
    timejson={
        "date":date.getDate(),
        "month":date.getMonth(),
        "year":date.getFullYear(),
        "hour":date.getHours(),
        "minute":date.getMinutes(),
        "seconds":date.getSeconds()
    }
    
    try{
        var mailOptions = {
            from: 'namnbansal102@gmail.com',
            to: email,
            subject: 'Thanks For Coming To Our Website',
            text: `Your One Time Password is ${randomOtp}`
           };
           transporter.sendMail(mailOptions, function(error, info){
             if (error) {
           
           console.log(error);
         } else {
           console.log('Email sent: ' + info.response);
         }
       });
        
        return Response.json({success:true,"otp":randomOtp},{status:200})
        
    }catch{
        return Response.json({success:false},{status:400})
    }
}
const PUT=async(req,res)=>{
    const {clientOtp}=await req.json();
    if (clientOtp==undefined || clientOtp==null) {
        console.log("Otp Not Defined");
        return Response.json({success:false})
    }
    if (clientOtp==randomOtp) {
        let img="https://cdn-icons-png.flaticon.com/128/1077/1077012.png"
               
               var cipherpass = CryptoJS.AES.encrypt(password, process.env.CRYPTO_SECRET).toString();
               await connectDb();
               let u=new User({
                   name:name,
                   email:email,
                   password:cipherpass,
                   img:img
                })
                
                // await u.save();
                const token=jwt.sign({success:true,email:email,name:name},process.env.JWT_SECRET)
                return Response.json({success:true,token},{status:200})
       
        
    }
    else{
        return Response.json({success:false,"otp":clientOtp},{status:200})
        
    }
}
export {POST,PUT};

