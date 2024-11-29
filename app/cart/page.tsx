'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Cart() {
  const [cartItems, setCartItems] = useState<
    { name: string; price: number; image: string }[]
  >([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const deleteItem = (itemToDelete: { name: string; price: number; image: string }) => {
    const updatedCart = cartItems.filter((item) => item.name !== itemToDelete.name);
    setCartItems(updatedCart);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center py-16">
        <h1 className="text-5xl font-bold mb-8">Your Cart</h1>

        <div className="w-full max-w-4xl p-6 bg-black bg-opacity-70 rounded-lg">
          {cartItems.length === 0 ? (
            <p className="text-xl">Your cart is empty.</p>
          ) : (
            <ul className="space-y-6">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                      <p className="text-yellow-400 font-semibold">฿{item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => deleteItem(item)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="flex justify-between mt-8 text-lg font-semibold">
            <span>Total:</span>
            <span className="text-yellow-400">฿{total.toFixed(2)}</span>
          </div>

          <Link href="/checkout">
            <button className="mt-6 w-full py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-300">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
