export const initializeRazorpay = (options: any) => {
  return new Promise((resolve, reject) => {
    const rzp = new (window as any).Razorpay(options);
    rzp.on('payment.success', (response: any) => resolve(response));
    rzp.on('payment.error', (error: any) => reject(error));
    rzp.open();
  });
};

export const createRazorpayOrder = async (amount: number) => {
  // In production, this should call your backend API
  // For demo, we'll create a mock order
  return {
    id: 'order_' + Math.random().toString(36).substring(7),
    amount: amount * 100, // Razorpay expects amount in paise
    currency: 'INR',
  };
};

export const processRazorpayPayment = async (amount: number) => {
  try {
    const order = await createRazorpayOrder(amount);
    
    const options = {
      key: 'rzp_test_YourTestKey', // Replace with your test key
      amount: order.amount,
      currency: order.currency,
      name: 'SwiggyMoney',
      description: 'Food Voucher Purchase',
      order_id: order.id,
      prefill: {
        email: 'user@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#f97316',
      },
    };

    const response = await initializeRazorpay(options);
    return response;
  } catch (error) {
    throw error;
  }
};