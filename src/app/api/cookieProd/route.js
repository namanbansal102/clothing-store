import { cookies, headers } from "next/headers";
import {SignJWT, jwtVerify} from 'jose';

export async function POST(req,res){
    let token=await req.json();
    try {
        
   
    token=token['token']
    if (!token) {
        return Response.json({"success":false,data:null},{status:401})
    }
    const {payload} = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    return Response.json({"success":true,data:payload},{status:200})
} catch (error) {
    return Response.json({"success":false,data:null},{status:400})
        
}
}