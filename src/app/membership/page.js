import React from 'react';

const Membership = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Membership</h1>
      <p className="text-lg leading-relaxed mb-4">
        Welcome to the Westside Membership Program! Unlock exclusive benefits 
        and rewards by becoming a member today.
      </p>
      <div className="border border-gray-200 rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Membership Tiers</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-2">Silver Tier</li>
          <li className="text-lg mb-2">Gold Tier</li>
          <li className="text-lg mb-2">Platinum Tier</li>
        </ul>
      </div>
      <div className="border border-gray-200 rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Membership Benefits</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-2">Exclusive discounts</li>
          <li className="text-lg mb-2">Early access to sales</li>
          <li className="text-lg mb-2">Birthday rewards</li>
          <li className="text-lg mb-2">Free shipping on all orders</li>
          <li className="text-lg mb-2">Priority customer support</li>
        </ul>
      </div>
      <p className="text-lg leading-relaxed mb-4">
        Joining the Westside Membership Program is easy! Simply sign up 
        for an account on our website and start enjoying the benefits right away.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        For more information about our membership program, please contact 
        our customer support team.
      </p>
    </div>
  );
};

export default Membership;
