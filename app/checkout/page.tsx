'use client'; // Marking this as a client component

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [cartItems, setCartItems] = useState<{ name: string, price: number }[]>([]);

  useEffect(() => {
    // Get the cart items from localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const handleCheckout = () => {
    if (!paymentMethod) {
      alert('Please choose a payment method.');
      return;
    }
    setShowSuccessModal(true); // Show the modal after successful payment
  };

  const closeModal = () => {
    setShowSuccessModal(false); // Close the modal when the user clicks OK
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-end p-6 space-x-4">
        <Link href="/" passHref>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-yellow-600">
            Home
          </button>
        </Link>
      </header>

      {/* Checkout Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center py-16">
        <h1 className="text-5xl font-bold mb-8 text-white">Checkout</h1>

        <div className="w-full max-w-4xl p-6 bg-black bg-opacity-70 rounded-lg text-white mb-8">
          <h2 className="text-3xl font-semibold mb-4">Enter Payment Details</h2>

          <div className="mb-8">
            <label className="block text-lg font-semibold mb-2">Payment Method</label>
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="credit-card"
                name="payment-method"
                value="Credit Card"
                checked={paymentMethod === 'Credit Card'}
                onChange={handlePaymentChange}
                className="mr-2"
              />
              <label htmlFor="credit-card">Credit Card</label>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="paypal"
                name="payment-method"
                value="PayPal"
                checked={paymentMethod === 'PayPal'}
                onChange={handlePaymentChange}
                className="mr-2"
              />
              <label htmlFor="paypal">PayPal</label>
            </div>
          </div>

          {/* Error message if no payment method is selected */}
          {!paymentMethod && <p className="text-red-500">Please choose a payment method.</p>}

          {/* Total Price Display */}
          <div className="mb-8">
            <p className="text-xl font-semibold">Total Price: ฿{total}</p>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Complete Purchase
          </button>
        </div>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-96">
            <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">Payment Successful!</h2>
            <p className="text-lg text-center text-gray-700 mb-4">
              Your payment was successful using <strong>{paymentMethod}</strong>.
            </p>
            <button
              onClick={closeModal}
              className="w-full py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center p-4 mt-auto">
        <p>&copy; 2024 Manchester United Fan Page. All rights reserved.</p>
      </footer>
    </div>
  );
}
