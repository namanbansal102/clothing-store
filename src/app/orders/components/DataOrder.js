'use server'
import React from 'react'
import ClientOrder from './ClientOrder';
// import PaymentComponent from './paymentComponent'
const DataOrder =async(store) => {
    const storeo=store['store']
    var total=0;
    console.log("Storeo is Storeo is Storeo is",storeo);
    const fetchData=async ()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_HOST}api/finalOrder`, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({ id: storeo}), // Send as JSON
         })
         let json=await data.json()
         return json;
        }
         
       // Empty dependency array means this effect runs only once after the initial render
     
     let myjson=await fetchData()
     const makePayment = async (FName,LName,address,city,state,pinCode,totalAmount) => {

      console.log("Make Payment Function is Running",FName,LName,address,city,state,pinCode,totalAmount);
      const initializeRazorpay = () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          // document.body.appendChild(script);
    
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
    
          document.body.appendChild(script);
        });
      };
        var date = new Date();
        var hour = date.getHours();
         var minute = date.getMinutes();
         var second = date.getSeconds();
        const res = await initializeRazorpay();
        if (!res) {
          alert("Razorpay SDK Failed to load");
          return;
        }
        // Make API call to the serverless API
        const data = await fetch("http://localhost:3000/api/paymentGate", { method: "POST",headers: {  
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({FName,LName,address,city,state,pinCode,totalAmount}), }).then((t) =>
          t.json()
        );
        console.log(data);

        var options = {
          key: process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
          name: "Westide Clothing",
          currency: "INR",
          amount: data.amount,
          order_id: data.id,
          description: "Thankyou For Purchasing From Our Store",
          image: "https://www.westside.com/cdn/shop/files/w-logo.png?v=1687335574&width=210",
          handler: function (response) {
            // Validate payment at server - using webhooks is a better idea.
            router.push(`/orders/trackOrder/${response.razorpay_payment_id}`,{scroll:false})
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
  
          },
          prefill: {
            name: FName,
            email:FName,
            contact: "9068808000",
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };
     
  return (
    <>
    <ClientOrder outlet={{meData:myjson,a:2}}></ClientOrder>
     
    </>
  )
}

export default DataOrder