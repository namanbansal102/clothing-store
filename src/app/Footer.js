'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import  nodemailer  from "nodemailer";
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'namanbansal102@gmail.com',
      pass: process.env.NEXT_PUBLIC_PASS_EMAIL
    }
  }); 
const Footer = () => {
    const [email, setEmail] = useState("")
  return (
    <div className='footer h-96 flex flex-row gap-7 justify-around items-center text-xl'>
        <div className="playstore flex gap-5 flex-col">
            <h1>DOWNLOAD THE APP</h1>
            <img className='cursor-pointer' src="https://cdn.shopify.com/s/files/1/0504/3457/2487/files/Frame_2.svg?v=1681220243" alt="" />
            <img className='cursor-pointer' src="https://cdn.shopify.com/s/files/1/0504/3457/2487/files/Frame_3.svg?v=1681220243" alt="" />
        </div>
        <div className="first-div-footer  w-fit  flex gap-5  flex-col px-3">
            <h1 className='font-bold'>SHOP</h1>
            <ul className='flex gap-5 flex-col text-gray-400'>
                <Link href={'/products/men'}>
                <li className='cursor-pointer hover:text-black'>MEN</li>
                </Link>
                <Link href={'/products/women'}>
                <li className='cursor-pointer hover:text-black'>WOMEN</li>
                </Link>
                <Link href={'/products/beauty'}>
                <li className='cursor-pointer hover:text-black'>BRAND</li>
                </Link>
                <Link href={'/products/brand'}>
                <li className='cursor-pointer hover:text-black'>BEAUTY</li>
                </Link>
                <Link href={'/products/kids'}>
                    <li className='cursor-pointer hover:text-black'>KIDS</li>
                    </Link>
               
            </ul>
        </div>
        <div className="second-div-footer  w-fit flex gap-5  flex-col px-3">
        <h1 className='font-bold'>STORES</h1>
            <ul className='flex gap-5 flex-col text-gray-400'>
                <Link href={'/about'}>
                <li className='cursor-pointer hover:text-black'>ABOUT US</li>
                </Link>
                <Link href={'/membership'}>
                <li className='cursor-pointer hover:text-black'>MEMBERSHIP</li>
                </Link>
                <Link href={'/contact'}>
                <li className='cursor-pointer hover:text-black'>CONTACT</li>
                </Link>
                <Link href={'/storeLocator'}>
                <li className='cursor-pointer hover:text-black'>STORE LOCATOR</li>
                </Link>
                
                {/* <li className='cursor-pointer hover:text-black'>SITE MAP</li> */}
                <li className='cursor-pointer hover:text-black'>MEMBERSHIP</li>
            </ul>
        </div>
        <div className="third-div-footer  w-fit  flex gap-5  flex-col px-3">
        <h1 className='font-bold'>JOIN NEWSLETTER</h1>
            <ul className='flex gap-5 flex-col'>
                <li>Get The Latest Updates By Subscribing Us</li>
                <li><input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Enter Email ID'  className='border-b-2 border-black outline-none'/></li>
                <button onClick={()=>{
                    console.log("handle Click is Running");
                    var mailOptions = {
                        from: 'namnbansal102@gmail.com',
                        to: email,
                        subject: 'Thanks For Coming To Our Website',
                        html: `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Westside Store - Get OTP</title>
                            <style>
                                /* Reset CSS */
                                body, html {
                                    margin: 0;
                                    padding: 0;
                                    font-family: Arial, sans-serif;
                                    line-height: 1.6;
                                }
                                img {
                                    max-width: 100%;
                                    height: auto;
                                }
                                /* Responsive CSS */
                                @media screen and (max-width: 600px) {
                                    .container {
                                        width: 100% !important;
                                    }
                                }
                            </style>
                        </head>
                        <body>
                            <div class="container" style="max-width: 600px; margin: 0 auto;">
                                <div class="header" style="text-align: center; padding: 20px;">
                                    <img style="height: 50px;" src="https://www.westside.com/cdn/shop/files/w-logo.png?height=628&pad_color=fff&v=1687335574&width=1200" alt="Westside Logo">
                                </div>
                                <div class="content" style="padding: 20px;">
                                    <h2 style="text-align: center;">Welcome to Westside Store</h2>
                                    <p style="text-align: center;">Your One-Time Password (OTP) for authentication is:</p>
                                    <div class="otp" style="text-align: center; font-size: 24px; font-weight: bold; padding: 20px;">
                                        ${email}<!-- Replace with generated OTP -->
                                    </div>
                                    <p style="text-align: center;">This OTP is valid for a single use only. Please do not share it with anyone.</p>
                                    <hr>
                                    <div class="options" style="text-align: center;">
                                        <h3>Explore Our Collections</h3>
                                        <p style="text-align: center;">Discover the latest trends in clothing for men and women.</p>
                                        <div class="buttons" style="text-align: center;display:flex;flex-direction:column;">
                                            <a href="${process.env.NEXT_PUBLIC_HOST}/products/men" style="padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Shop Men</a>
                                            <a href="${process.env.NEXT_PUBLIC_HOST}/products/women" style="padding: 10px 20px; background-color: #ff007f; color: #fff; text-decoration: none; border-radius: 5px; margin-left: 10px;">Shop Women</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="footer" style="background-color: #f2f2f2; padding: 20px; text-align: center;">
                                    <p style="margin: 0;">For any queries, contact us at <a href=${process.env.NEXT_PUBLIC_HOST}>Go To WestSide</a></p>
                                </div>
                            </div>
                        </body>
                        </html>
                        `
                       };
                       transporter.sendMail(mailOptions, function(error, info){
                         if (error) {
                       
                       console.log(error);
                     } else {
                       console.log('Email sent: ' + info.response);
                     }
                   });


                }}  className='bg-black text-white py-3 px-1'>SUBSCRIBE</button>
                
            </ul>
        </div>
    </div>
  )
}

export default Footer