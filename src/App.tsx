import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { CartProvider } from "./contexts/CartContext";
import Checkout from "./pages/Checkout";
import FAQ from "./pages/FAQ";
import Features from "./pages/Features";
import Home from "./pages/Home";
import OrderConfirmation from "./pages/OrderConfirmation";
import Vouchers from "./pages/Vouchers";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/" element={<FAQ />} /> */}
                <Route path="/vouchers" element={<Vouchers />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route
                  path="/order-confirmation"
                  element={<OrderConfirmation />}
                />
                <Route path="/features" element={<Features />} />
                <Route path="/faq" element={<FAQ />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Toaster position="top-center" />
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
