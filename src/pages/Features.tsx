import React from 'react';
import { Gift, CreditCard, Clock, Users, ShieldCheck, Wallet } from 'lucide-react';

const features = [
  {
    title: "Send Instant Food Joy",
    description: "Gift delicious moments to your loved ones instantly with our digital vouchers",
    icon: Gift,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Secure Transactions",
    description: "Shop with confidence using our encrypted payment system",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Instant Delivery",
    description: "Receive your voucher codes immediately after purchase",
    icon: Clock,
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=2071"
  },
  {
    title: "Group Gifting Made Easy",
    description: "Organize group gifts for special occasions effortlessly",
    icon: Users,
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=2069"
  },
  {
    title: "Flexible Payment Options",
    description: "Choose from multiple payment methods for your convenience",
    icon: CreditCard,
    image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Savings & Rewards",
    description: "Earn points and get exclusive discounts on bulk purchases",
    icon: Wallet,
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=2070"
  }
];

const Features = () => {
  return (
    <div className="py-12">
      {features.map((feature, index) => (
        <section
          key={index}
          className={`min-h-screen flex items-center ${
            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 0 ? '' : 'lg:flex-row-reverse'
            }`}>
              <div className={`space-y-6 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <div className="inline-block p-3 bg-orange-100 rounded-lg">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">{feature.title}</h2>
                <p className="text-xl text-gray-600">{feature.description}</p>
                <button className="btn">
                  Learn More
                </button>
              </div>
              <div className="relative h-96 lg:h-[600px]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Features;