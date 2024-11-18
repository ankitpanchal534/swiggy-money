import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Purchase!</h1>
      <p className="text-xl text-gray-600 mb-8">
        Your voucher codes have been sent to your email address.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
        <ul className="text-left space-y-4">
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">✓</span>
            <span>Check your email for voucher codes</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">✓</span>
            <span>If you sent a gift, the recipient will receive their voucher separately</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">✓</span>
            <span>Use your voucher code during checkout on Swiggy</span>
          </li>
        </ul>
      </div>

      <div className="space-x-4">
        <button
          onClick={() => navigate('/vouchers')}
          className="btn"
        >
          Buy More Vouchers
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;