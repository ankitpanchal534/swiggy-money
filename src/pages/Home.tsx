import { ArrowRight, CreditCard, Gift, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Save Big on Your Favorite Food
            </h1>
            <p className="text-xl mb-8">
              Get exclusive Swiggy vouchers at amazing discounts
            </p>
            <Link
              to="/vouchers"
              className="inline-flex items-center bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors"
            >
              Browse Vouchers <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
                <Gift className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Value</h3>
              <p className="text-gray-600">
                Get up to 40% off on Swiggy vouchers
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Secure</h3>
              <p className="text-gray-600">Safe and secure payment methods</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
                <CreditCard className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Delivery</h3>
              <p className="text-gray-600">Get your voucher code instantly</p>
            </div>
          </div>
        </div>
      </section>
      <FAQ />

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Choose Voucher",
                description: "Select from our range of Swiggy vouchers",
              },
              {
                step: "2",
                title: "Add to Cart",
                description: "Select the denomination and quantity",
              },
              {
                step: "3",
                title: "Make Payment",
                description: "Pay using your preferred payment method",
              },
              {
                step: "4",
                title: "Get Code",
                description: "Receive your voucher code instantly",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
