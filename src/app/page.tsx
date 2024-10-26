/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Clock,
  CreditCard,
  Gift,
  Lock,
  Percent,
  PiggyBank,
  Repeat,
  Shield,
  ShoppingBag,
  Smartphone,
  Star,
  Truck,
  Users,
  Utensils,
  Wallet,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <header className="sticky top-0 z-50 w-full  bg-[#FF5200] p-6">
        <div className="container flex items-center justify-between m-auto">
          <Link
            href="https://www.swiggy.com"
            className="flex items-center space-x-2"
          >
            <Image
              src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
              alt="Swiggy Logo"
              width={150}
              height={62}
              className="rounded-xl"
            />
            {/* <span className="font-bold ">Swiggy Money</span> */}
          </Link>
          <nav className="flex space-x-6">
            <Link className=" font-bold  " href="https://www.swiggy.com">
              Home
            </Link>
            <Link
              className=" font-bold  "
              href="https://www.swiggy.com/tnc-corporate-sm"
            >
              T&C
            </Link>
            <Link
              className=" font-bold  "
              href="https://www.swiggy.com/support"
            >
              How It Works
            </Link>
            <Link
              className=" font-bold  "
              href="https://www.swiggy.com/swiggy-one"
            >
              Benefits
            </Link>
            <Link
              className=" font-bold  "
              href="https://www.swiggy.com/support/issues/swiggy_money_faq"
            >
              FAQs
            </Link>
            <Link
              className=" font-bold  "
              href="https://www.swiggy.com/corporate/contact-us/"
            >
              Corporate
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-10 text-white bg-[#FF5200]">
          <div className="m-auto container">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold  ">Swiggy Money </h1>
              <p className="max-w-2xl  md:text-lg">
                Discover the powerful features that make Swiggy Money the
                ultimate digital wallet for food lovers and beyond.
              </p>
            </div>
          </div>
        </section>
        <div className="max-h-[500px] overflow-hidden bg-[#FF5200] ">
          <img
            src="https://i.im.ge/2024/10/26/kgR7KC.Screenshot-2024-10-26-at-6-48-57PM-portrait.png"
            alt="Swiggy Money App"
            width={501}
            height={300}
            className="m-auto"
            // className="mt-8 rounded-lg shadow-lg"
          />
        </div>
        <section className="w-full py-16 bg-white">
          <div className="m-auto container">
            <h2 className="text-3xl font-bold text-center text-[#e23744] mb-8">
              Core Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-6 w-6 text-[#e23744]" />
                    <span>Instant Payments</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Make lightning-fast payments for your Swiggy orders and other
                  services with just a tap.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-[#e23744]" />
                    <span>Enhanced Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Enjoy peace of mind with our advanced encryption and
                  multi-factor authentication systems.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Repeat className="h-6 w-6 text-[#e23744]" />
                    <span>Auto-Recharge</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Set up automatic recharges to ensure your wallet is always
                  ready for your next purchase.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-[#fff5f0]">
          <div className="m-auto container">
            <h2 className="text-3xl font-bold text-center text-[#e23744] mb-8">
              Swiggy Ecosystem Integration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Utensils className="h-6 w-6 text-[#e23744]" />
                    <span>Food Delivery</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Use Swiggy Money for seamless payments on all your food
                  delivery orders from your favorite restaurants.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ShoppingBag className="h-6 w-6 text-[#e23744]" />
                    <span>Instamart</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Quick and easy payments for your grocery and essentials orders
                  through{" "}
                  <Link
                    href="https://www.swiggy.com/instamart"
                    className="text-[#e23744] hover:underline"
                  >
                    Swiggy Instamart
                  </Link>
                  .
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Truck className="h-6 w-6 text-[#e23744]" />
                    <span>Genie</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Pay for{" "}
                  <Link
                    href="https://www.swiggy.com/swiggy-genie"
                    className="text-[#e23744] hover:underline"
                  >
                    Swiggy Genie
                  </Link>{" "}
                  services effortlessly, whether you&apos;re sending packages or
                  getting items picked up.
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center flex justify-center max-w-full">
              <Image
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_940,h_560/swiggy_one/dweb_swiggy_one"
                alt="Swiggy Ecosystem"
                width={501}
                height={300}
                className="max-w-full"
                // className="inline-block rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-white">
          <div className="m-auto container">
            <h2 className="text-3xl font-bold text-center text-[#e23744] mb-8">
              Rewards and Savings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-6 w-6 text-[#e23744]" />
                    <span>Swiggy One Benefits</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Enjoy exclusive{" "}
                  <Link
                    href="https://www.swiggy.com/swiggy-one"
                    className="text-[#e23744] hover:underline"
                  >
                    Swiggy One
                  </Link>{" "}
                  benefits, including free delivery, extra discounts, and
                  priority customer support.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Gift className="h-6 w-6 text-[#e23744]" />
                    <span>Exclusive Offers</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Access special deals and promotions available only to Swiggy
                  Money users across all Swiggy services.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Percent className="h-6 w-6 text-[#e23744]" />
                    <span>Cashback Rewards</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Get cashback on select transactions, adding more value to your
                  Swiggy Money balance.
                </CardContent>
              </Card>
            </div>
            <div
              className="mt-12 text-center  flex justify-center rounded-xl overflow-hidden"
              style={{
                background: "rgb(255,84,32)",
                backgroundImage:
                  "linear-gradient(90deg, rgba(255,84,32,1) 0%, rgba(255,107,49,1) 100%)",
              }}
            >
              <img
                src="https://images.fonearena.com/blog/wp-content/uploads/2020/06/Swiggy-Money.jpg"
                alt="Swiggy Rewards"
                // width={501}
                // height={300}
                // className="inline-block rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-[#fff5f0] text-[#e23744]">
          <div className="m-auto container">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold ]">Seamless Integration</h2>
                <p className=" md:text-lg">
                  Swiggy Money integrates seamlessly with all Swiggy services,
                  including food delivery, Instamart, Genie, and Dineout. Enjoy
                  a unified payment experience across the entire Swiggy
                  ecosystem.
                </p>
                <ul className="space-y-2 ">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-[#e23744] mr-2" />
                    One-click payments for all Swiggy services
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-[#e23744] mr-2" />
                    Unified transaction history
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-[#e23744] mr-2" />
                    Seamless transfer of rewards and cashbacks
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://deonde.co/img/swiggy-main.png"
                  alt="Swiggy App Interface"
                  width={484}
                  height={600}
                  // className="rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-white">
          <div className="m-auto container">
            <h2 className="text-3xl font-bold text-center text-[#e23744] mb-8">
              Convenience Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PiggyBank className="h-6 w-6 text-[#e23744]" />
                    <span>Split Bills</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Easily split bills with friends and family for group orders
                  and dining experiences.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-6 w-6 text-[#e23744]" />
                    <span>Transaction History</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Access detailed transaction history and spending insights to
                  manage your expenses better.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Smartphone className="h-6 w-6 text-[#e23744]" />
                    <span>Mobile Top-ups</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Recharge your mobile balance directly from your Swiggy Money
                  wallet for added convenience.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-[#fff5f0]">
          <div className="m-auto container">
            <h2 className="text-3xl font-bold text-center text-[#e23744]   mb-8">
              How to Use Swiggy Money
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Wallet className="h-6 w-6 text-[#e23744]" />
                    <span>Add Money</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Load your Swiggy Money wallet using UPI, net banking, or
                  credit/debit cards.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ShoppingBag className="h-6 w-6 text-[#e23744]" />
                    <span>Place Order</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Choose Swiggy Money as your payment method when placing an
                  order on{" "}
                  <Link
                    href="https://www.swiggy.com"
                    className="text-[#e23744] hover:underline"
                  >
                    Swiggy
                  </Link>
                  .
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-6 w-6 text-[#e23744]" />
                    <span>Quick Pay</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Enjoy instant, one-click payments for a seamless checkout
                  experience.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-6 w-6 text-[#e23744]" />
                    <span>Earn Rewards</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Accumulate cashback and points with every transaction using
                  Swiggy Money.
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <img
                src="https://i.gadgets360cdn.com/large/swiggy_money_screenshots_gadgets_360_1593503678515.jpg"
                alt="How to Use Swiggy Money"
                // width={501}
                // height={300}
                className="inline-block rounded-xl shadow-lg overflow-hidden"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-white">
          <div className="m-auto container">
            <h2 className="text-3xl font-bold text-center text-[#e23744] mb-8">
              Coming Soon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-6 w-6 text-[#e23744]" />
                    <span>Virtual Debit Card</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Use your Swiggy Money balance for online purchases beyond the
                  Swiggy ecosystem with our upcoming virtual debit card feature.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="h-6 w-6 text-[#e23744]" />
                    <span>Biometric Authentication</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Enhance your account security with fingerprint and face
                  recognition login options, coming soon to Swiggy Money.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-6 w-6 text-[#e23744]" />
                    <span>Family Accounts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Create and manage linked accounts for family members, with
                  customizable spending limits and permissions.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-[#fff5f0]  text-[#e23744]">
          <div className="m-auto container">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold">
                Experience Swiggy Money Today
              </h2>
              <p className="max-w-2xl  md:text-lg">
                Join millions of users who are already enjoying the convenience
                and benefits of Swiggy Money.
              </p>
              <div className="space-x-4">
                <Button className="bg-[#e23744] hover:bg-[#d52c3c] ">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">
                  <Link href="https://www.swiggy.com/support">Learn More</Link>
                </Button>
              </div>
              <div className="mt-8">
                <img
                  src="https://miro.medium.com/v2/resize:fit:1152/1*G3tBmNHKdAI7lbRY_rYZLA.jpeg"
                  alt="Swiggy Money App Showcase"
                  width={501}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-white">
          <div className="m-auto container">
            <h2 className="text-3xl font-bold text-center text-[#e23744] mb-8">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-4">
                  <p className="mb-4">
                    <q>
                      Swiggy Money has made ordering food so much easier. I love
                      the cashback rewards!
                    </q>
                  </p>
                  <p className="font-semibold">- Priya S., Delhi</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <p className="mb-4">
                    <q>
                      The convenience of Swiggy Money is unmatched. It&lsquo;s
                      my go-to payment method now.
                    </q>
                  </p>
                  <p className="font-semibold">- Rahul M., Mumbai</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <p className="mb-4">
                    <q>
                      I feel much safer using Swiggy Money for all my food
                      deliveries. Great security!
                    </q>
                  </p>
                  <p className="font-semibold">- Anita K., Bangalore</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 text-black bg-[#f8f8f8]">
        <div className="m-auto container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col md:flex-row md:gap-8">
              <Link
                className="text-sm hover:underline"
                href="https://www.swiggy.com/terms-and-conditions"
              >
                Terms of Service
              </Link>
              <Link
                className="text-sm hover:underline"
                href="https://www.swiggy.com/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-sm hover:underline"
                href="https://www.swiggy.com/support"
              >
                Help Center
              </Link>
              <Link
                className="text-sm hover:underline"
                href="https://www.swiggy.com/corporate"
              >
                Corporate
              </Link>
              <Link
                className="text-sm hover:underline"
                href="https://www.swiggy.com/blog"
              >
                Blog
              </Link>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center">
              <p className="text-sm text-gray-500">
                © 2024 Swiggy Money. All rights reserved.
              </p>
              <div className="flex gap-2 mt-2 md:mt-0">
                <Link
                  href="https://www.facebook.com/swiggy"
                  className="text-gray-500 hover:text-[#FF5200]"
                >
                  Facebook
                </Link>
                <Link
                  href="https://twitter.com/swiggy"
                  className="text-gray-500 hover:text-[#FF5200]"
                >
                  Twitter
                </Link>
                <Link
                  href="https://www.instagram.com/swiggy"
                  className="text-gray-500 hover:text-[#FF5200]"
                >
                  Instagram
                </Link>
              </div>
            </div>
          </div>
          <hr className="mt-10" />
          <div className="mt-4 text-center flex items-center gap-6 justify-center py-7">
            <h3 className="text-lg md:text-2xl font-bold">
              For better experience, download the Swiggy app now
            </h3>
            <div className="flex items-center gap-6">
              <a
                href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
                rel="nofollow noopener"
                target="_blank"
                className="AppDownloadLinks_appLink__3lQqz"
                data-testid="ios-appstore"
              >
                <img
                  alt=""
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
                  height="65"
                  width="200"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=in.swiggy.android&amp;referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
                rel="nofollow noopener"
                target="_blank"
                className="AppDownloadLinks_appLink__3lQqz"
                data-testid="android-playstore"
              >
                <img
                  alt=""
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
                  height="65"
                  width="200"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
