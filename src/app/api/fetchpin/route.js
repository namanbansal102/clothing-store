export async function POST(request,response){
    let pin=await request.json()
    pin=pin.pin
    const myjson={
        125102:"Ellenabad",140401:"Rajpura",
        125100:"Sirsa"
    }
    if (myjson[pin]!=undefined) {
        return Response.json({"status":"available"})
    }
    else{
        
        return Response.json({"status":"unavailable"})
    }
    
}