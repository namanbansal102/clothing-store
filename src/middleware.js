import { NextResponse } from 'next/server'
import {SignJWT, jwtVerify} from 'jose';

// This function can be marked `async` if using `await` inside
export async function middleware(req,res) {
 try {
  console.log("middleware:::::::::::::::::::::::::");
  const requestHeaders = new Headers(req.headers);
  // add field to request headers
  let cookie=req.cookies
  cookie=cookie.get('token')
  let query=null;
  if (cookie!=undefined) {
    query=(cookie)['value']
    query=query.split('"')
    query=query[1]
  }
  console.log(query);
  if (query==null && !req.nextUrl.pathname.startsWith('/Login') && !req.nextUrl.pathname.startsWith('/SignUp')) {
    // return NextResponse.json({hello:"query==null"})    
    return NextResponse.redirect(new URL('/', req.url))   
  }
  const {payload} = await jwtVerify(query, new TextEncoder().encode(process.env.JWT_SECRET));

  if (req.nextUrl.pathname.startsWith('/Login') || req.nextUrl.pathname.startsWith('/SignUp')) {
    return NextResponse.redirect(new URL('/', req.url));
  }
        // return NextResponse.redirect(new URL(req.nextUrl, req.url))   
  } catch (error) {
    console.log("Error is:",error);
    if (!req.nextUrl.pathname.startsWith('/Login') && !req.nextUrl.pathname.startsWith('/SignUp')) {  
      return NextResponse.redirect(new URL('/Login', req.url))    
    }       
  }
  } 

  export const config = {
    matcher: ['/Login', '/SignUp','/orders/:path*'],
  }
// See "Matching Paths" below to learn more