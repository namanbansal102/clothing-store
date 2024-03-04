var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'namanbansal102@gmail.com',
      pass: 'wzxv qfku errq lzwm'
    }
  }); 
export async function POST(req,res) {
    try {
      console.log(req);
        let make=req
    let randomOtp = Math.floor((Math.random() * 10000) + 9);
  var mailOptions = {
      from: 'namnbansal102@gmail.com',
      to: make.email,
      subject: 'Thanks For Coming To Our Website',
      text: `Your One Time Password is ${randomOtp}`
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    return Response.json({success:true});
} catch (error) {
    console.log("Error is:",error);
    return Response.json({success:false});
    }
  }