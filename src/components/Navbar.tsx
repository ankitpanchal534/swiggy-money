import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 py-2">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/logo.webp" className="h-12" />
            {/* <span className="font-bold text-xl">SwiggyMoney</span> */}
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-orange-200 px-3 py-2">
              Home
            </Link>
            <Link to="/vouchers" className="hover:text-orange-200 px-3 py-2">
              Vouchers
            </Link>
            <Link to="/faq" className="hover:text-orange-200 px-3 py-2">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
