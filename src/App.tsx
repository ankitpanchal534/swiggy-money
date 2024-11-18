import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vouchers from './pages/Vouchers';
import FAQ from './pages/FAQ';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Features from './pages/Features';
import { CartProvider } from './contexts/CartContext';

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
                <Route path="/vouchers" element={<Vouchers />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
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