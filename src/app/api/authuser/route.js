import { headers } from 'next/headers';

export async function GET(req, res) {
    const customHeader = headers(req).get('X-My-Custom-Header');
    console.log("Custom Header:::::::::::::::::::::::::::::::::::::", customHeader);
    
    // Now you can use the customHeader variable as needed
    
    return Response.json({ status: true });
}
