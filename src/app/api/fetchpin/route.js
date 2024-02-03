export async function POST(request,response){
    let pin=await request.json()
    pin=pin.pin
    let data=await fetch(`https://api.postalpincode.in/pincode/${pin}`)

    let json=await data.json()
    console.log(json);
    if ((json[0])['Status']=="Success") {
        return Response.json({"status":"available","state":((json[0])['PostOffice'])[0]["State"],"Block":((json[0])['PostOffice'])[0]["Block"]})   
    }
    else{
        
        return Response.json({"status":"unavailable"})
    }
    
}