import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ShoppingCart, AlertCircle } from "lucide-react";
import toast from "react-hot-toast";

interface Voucher {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  image: string;
}

const mockVouchers: Voucher[] = [
  {
    id: "1",
    name: "Swiggy ₹500 Voucher",
    description: "Valid for 3 months on all orders",
    originalPrice: 500,
    discountedPrice: 400,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "2",
    name: "Swiggy ₹1000 Voucher",
    description: "Valid for 6 months on all orders",
    originalPrice: 1000,
    discountedPrice: 750,
    discount: 25,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "3",
    name: "Swiggy ₹2000 Voucher",
    description: "Valid for 12 months on all orders",
    originalPrice: 2000,
    discountedPrice: 1400,
    discount: 30,
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

const Vouchers = () => {
  const [selectedVoucher, setSelectedVoucher] = useState<Voucher | null>(null);

  const {
    data: vouchers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["vouchers"],
    queryFn: () => Promise.resolve(mockVouchers),
  });

  const handleBuyNow = (voucher: Voucher) => {
    setSelectedVoucher(voucher);
    toast.success("Added to cart!");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-xl text-gray-700">Failed to load vouchers</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Swiggy Vouchers</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vouchers?.map((voucher) => (
          <div
            key={voucher.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={voucher.image}
              alt={voucher.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{voucher.name}</h3>
              <p className="text-gray-600 mb-4">{voucher.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold text-orange-600">
                    ₹{voucher.discountedPrice}
                  </span>
                  <span className="ml-2 text-gray-500 line-through">
                    ₹{voucher.originalPrice}
                  </span>
                </div>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm">
                  {voucher.discount}% OFF
                </span>
              </div>
              <button
                onClick={() => handleBuyNow(voucher)}
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vouchers;
