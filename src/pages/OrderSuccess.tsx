import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Copy, Share2, Download, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const voucherCode = 'SWIGGY' + Math.random().toString(36).substring(2, 8).toUpperCase();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(voucherCode);
    toast.success('Voucher code copied!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-12 text-center">
            <CheckCircle className="h-20 w-20 text-white mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-white mb-2">Order Successful!</h1>
            <p className="text-orange-100">Your Swiggy voucher is ready to use</p>
          </div>

          {/* Voucher Code */}
          <div className="px-8 py-10">
            <div className="bg-orange-50 rounded-xl p-6 mb-8">
              <p className="text-sm text-orange-600 font-medium mb-2">Your Voucher Code</p>
              <div className="flex items-center justify-between bg-white rounded-lg p-4 border-2 border-orange-200">
                <span className="text-2xl font-mono font-bold tracking-wider text-gray-800">
                  {voucherCode}
                </span>
                <button
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-orange-100 rounded-full transition-colors"
                >
                  <Copy className="h-5 w-5 text-orange-600" />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Voucher Details</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-32">Validity:</span>
                    <span className="font-medium">6 months</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32">Minimum Order:</span>
                    <span className="font-medium">₹200</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32">Maximum Discount:</span>
                    <span className="font-medium">₹500</span>
                  </li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col space-y-3">
                <button className="btn flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Receipt
                </button>
                <button className="btn bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share Voucher
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-6">
            <button
              onClick={() => navigate('/vouchers')}
              className="text-orange-600 hover:text-orange-700 font-medium flex items-center justify-center w-full"
            >
              Browse More Vouchers
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;