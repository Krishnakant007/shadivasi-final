// Mock payment service for testing
export const createOrder = async (amount, plan, duration) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    order: {
      id: 'order_test_' + Math.random().toString(36).substr(2, 9),
      amount: amount * 100,
      currency: 'INR'
    }
  };
};

export const verifyPayment = async (paymentData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    success: true,
    message: 'Payment verified successfully (Test Mode)'
  };
};