import { Facebook, Instagram, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About SwiggyMoney</h3>
            <p className="text-gray-400">
              Get the best deals on food vouchers and save more on your favorite
              meals.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/vouchers" className="hover:text-white">
                  Vouchers
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>support@swiggymoney.com</li>
              <li>1800-200-500</li>
              <li>Mon-Sat: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 space-y-3">
          <p className="bg-slate-900 border-[0.5px] border-gray-600 rounded-2xl text-xs p-3">
            Disclaimer: Please note that this is not the official website of
            Swiggy.com. This website is independently created and maintained by{" "}
            <a
              href="https://linkedin.com/in/ankit-panchal534"
              className="font-bold underline"
            >
              Ankit Panchal
            </a>{" "}
            and is not affiliated with, endorsed by, or associated with Swiggy
            in any manner. It is intended to assist Swiggy customers by
            providing helpful information or services. All trademarks and logos
            related to Swiggy belong to their respective owners. This website is
            a private property and is solely for personal or educational
            purposes.
          </p>
          <p className="text-sm">
            For any assistance, kindly reach out to Ankit at{" "}
            <a href="mailto:ankit@swiggymoney.com" className=" text-orange-600">
              ankit@swiggymoney.com{" "}
            </a>
            {""}
          </p>
          <p>
            &copy; {new Date().getFullYear()} SwiggyMoney. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
