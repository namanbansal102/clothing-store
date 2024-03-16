import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg leading-relaxed mb-4">
        Have questions or feedback? We'd love to hear from you! 
        Contact our customer support team at:
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Phone: <span className="font-semibold">(123) 456-7890</span>
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Our customer support representatives are available to assist you 
        Monday through Friday, 9:00 AM to 5:00 PM EST.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        You can also reach out to us via email at <span className="underline">support@westside.com</span> 
        or through our social media channels.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        We value your feedback and strive to provide the best possible 
        shopping experience for our customers. Thank you for choosing Westside!
      </p>
    </div>
  );
};

export default Contact;
