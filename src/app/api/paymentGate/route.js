import connectDb from "../../../../middleware/mongoose"
import Orders from "../../../../models/Orders"
const Razorpay = require("razorpay");
const shortid = require("shortid");
export async function POST(req, res) {
  console.log("Payment Gate Route js is Running >>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<");
  console.log("Request is::::::::::::",req);
  const mydata=await req.json()
  console.log("My Data is:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::",mydata);
    var date = new Date();
    const{FName,LName,address,city,state,pinCode,totalAmount,prodInfo,id}=mydata
    console.log("FName is::::",FName);
    console.log(mydata);
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: process.env.KEY_ID,
      key_secret: process.env.KEY_SECRET,
    });
    
    // Create an order -> generate the OrderID -> Send it to the Front-end
    // Also, check the amount and currency on the backend (Security measure)
    const payment_capture = 1;
    const amount = totalAmount;
    const currency = "INR";
    const options = {
      amount: (totalAmount* 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {

      const response = await razorpay.orders.create(options);
      await connectDb();
      let arr=[]
      for(let i=0;i<prodInfo.length;i++){
        let element=prodInfo[i];
        arr.push({
          productId:element['_id'],
          quantity:1
        })
      }
      console.log("Response is::::::::::::::::::::::::::::",response);
      let p=new Orders({
        userEmail:(id.data)['email'],
        OrderId:response.id,
        address:address,
        products:arr,
        amount:response.amount,
        status:"Cleared",

    })
    await p.save();
      return Response.json({
        id: response.id,
        currency: "INR",
        amount: response.amount
      },{status:200});
    } catch (err) {
      console.log(err);
      return Response.json({success:false},{status:400})
    }
  
}
