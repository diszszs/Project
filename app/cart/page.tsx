'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Cart() {
  const [cartItems, setCartItems] = useState<{ name: string, price: number }[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Function to delete an item from the cart
  const deleteItem = (itemToDelete: { name: string, price: number }) => {
    const updatedCart = cartItems.filter(item => item !== itemToDelete);
    setCartItems(updatedCart);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white flex flex-col">


      {/* Cart Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center py-16">
        <h1 className="text-5xl font-bold mb-8 text-white">Your Cart</h1>

        <div className="w-full max-w-4xl p-6 bg-black bg-opacity-70 rounded-lg text-white mb-8">
          <h2 className="text-3xl font-semibold mb-4">Items in Cart</h2>
          <ul className="list-none mb-8">
            {cartItems.length === 0 ? (
              <p className="text-white">Your cart is empty.</p>
            ) : (
              cartItems.map((item, index) => (
                <li key={index} className="flex justify-between mb-4">
                  <span>{item.name}</span>
                  <span>฿{item.price}</span>
                  {/* Delete Button */}
                  <button
                    onClick={() => deleteItem(item)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </li>
              ))
            )}
          </ul>
          <div className="flex justify-between mb-8">
            <span className="text-xl font-semibold">Total:</span>
            <span className="text-xl font-semibold text-yellow-400">฿{total}</span>
          </div>
          <Link href="/checkout">
            <button className="w-full py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 mt-auto">
        <p>&copy; 2024 Manchester United Fan Page. All rights reserved.</p>
      </footer>
    </div>
  );
}
