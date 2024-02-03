const Razorpay = require("razorpay");
const shortid = require("shortid");

export async function POST(req, res) {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    const mydata=await req.json()
    const{FName,LName,address,city,state,pinCode,totalAmount}=mydata
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
