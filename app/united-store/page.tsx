'use client'; // Marking this as a client component

import { useState } from 'react';
import Link from 'next/link';

export default function UnitedStore() {
  const [cartItems, setCartItems] = useState<{ name: string, price: number }[]>(
    JSON.parse(localStorage.getItem('cart') || '[]') // Retrieve cart items from localStorage
  );

  const addToCart = (item: { name: string, price: number }) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);

    // Store updated cart items in localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-end p-6 space-x-4">
        {/* Home Link */}
        <Link href="/" passHref>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-yellow-600">
            Home
          </button>
        </Link>

        {/* Cart Link */}
        <Link href="/cart">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-yellow-700">
            Cart ({cartItems.length})
          </button>
        </Link>
      </header>

      {/* United Store Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center py-16">
        <h1 className="text-5xl font-bold mb-8 text-white">Manchester United Official Store</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full max-w-7xl">
          {/* Home Jersey */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img
              src="https://mufc-live.cdn.scayle.cloud/images/032465a23bed509d050589e6439809a2.jpg"
              alt="Home Jersey"
              className="object-contain mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Home Jersey</h2>
            <p className="text-gray-600 mb-4">Size: M, L, XL</p>
            <p className="text-3xl font-semibold text-yellow-400 mb-6">฿2,590.00</p>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart({ name: 'Home Jersey', price: 2590 })}
              className="w-full py-3 bg-red-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>

          {/* Away Jersey */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img
              src="https://mufc-live.cdn.scayle.cloud/images/6324d5baa6aaf2f6110f14523e0d29ce.jpg?brightness=1&width=576&height=768&quality=75&bg=ffffff"
              alt="Away Jersey"
              className="object-contain mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Away Jersey</h2>
            <p className="text-gray-600 mb-4">Size: M, L, XL</p>
            <p className="text-3xl font-semibold text-yellow-400 mb-6">฿2,765.00</p>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart({ name: 'Away Jersey', price: 2765 })}
              className="w-full py-3 bg-red-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>

          {/* Third Jersey Kid */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img
              src="https://mufc-live.cdn.scayle.cloud/images/9d8b1e35abd676645560a4bce2b86dca.jpg?brightness=1&width=1536&height=2048&quality=75&bg=ffffff" 
              alt="Third Jersey Kid"
              className="object-contain mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Third Jersey Kid</h2>
            <p className="text-gray-600 mb-4">Size: S, M, L</p>
            <p className="text-3xl font-semibold text-yellow-400 mb-6">฿2,199.00</p>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart({ name: 'Third Jersey Kid', price: 2280 })}
              className="w-full py-3 bg-red-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 mt-auto">
        <p>&copy; 2024 Manchester United Fan Page. All rights reserved.</p>
      </footer>
    </div>
  );
}
