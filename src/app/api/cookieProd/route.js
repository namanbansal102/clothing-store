import { cookies, headers } from "next/headers";
import {SignJWT, jwtVerify,jwtDecrypt} from 'jose';
import { decode } from "jsonwebtoken";
export async function POST(req,res){
    let token=await req.json();
    try {
        console.log("Cookie Product is Fetching>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        console.log("In api Token is::",token);
    token=token['token']
    if (!token) {
        return Response.json({"success":false,data:null},{status:401})
    }
    if (token.length>200) {
        console.log("If Condtion Runnign");
        let decrypted=await decode(token)
        // decrypted=JSON.stringify(decrypted)
        const payload={name:decrypted.name,
                    email:decrypted.email,
                    exp:decrypted['exp'],
                    nat:decrypted['iat'],
                    nbf:decrypted['nbf'],
                }
        console.log(decrypted+">>>>>>>>>>>>>>>>>>>>>>>");
        return Response.json({"success":true,data:payload},{status:200})
    }
    const {payload} = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    return Response.json({"success":true,data:payload},{status:200})
} catch (error) {
    return Response.json({"success":false,data:null},{status:400})
        
}
}