import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCard } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useCart } from "../contexts/CartContext";

const checkoutSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  cardNumber: z.string().regex(/^\d{16}$/),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/),
  cvv: z.string().regex(/^\d{3,4}$/),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data: CheckoutFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Clear cart and redirect to confirmation
      dispatch({ type: "CLEAR_CART" });
      navigate("/order-confirmation");
      toast.success("Order placed successfully!");
    } catch (error) {
      toast.error("Failed to process payment. Please try again.");
    }
  };

  if (state.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <button onClick={() => navigate("/vouchers")} className="btn">
            Browse Vouchers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {state.items.map((item) => (
              <div key={item.id} className="mb-4 pb-4 border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    {item.isGift && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">
                          Gift to: {item.recipientName}
                        </p>
                        <p className="text-sm text-gray-600">
                          Message: {item.giftMessage}
                        </p>
                      </div>
                    )}
                  </div>
                  <p className="font-semibold">
                    ₹{item.discountedPrice * item.quantity}
                  </p>
                </div>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total</span>
                <span>₹{state.total}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded-lg shadow-md space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  {...register("firstName")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  {...register("lastName")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                {...register("cardNumber")}
                placeholder="1234 5678 9012 3456"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
              {errors.cardNumber && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.cardNumber.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  {...register("expiryDate")}
                  placeholder="MM/YY"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
                {errors.expiryDate && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.expiryDate.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  {...register("cvv")}
                  type="password"
                  placeholder="123"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
                {errors.cvv && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.cvv.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center"
            >
              <CreditCard className="mr-2 h-5 w-5" />
              Pay ₹{state.total}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
