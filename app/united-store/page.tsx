'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function UnitedStore() {
  const [cartItems, setCartItems] = useState<
    { name: string; price: number; image: string }[]
  >([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    }
  }, []);

  const addToCart = (item: { name: string; price: number; image: string }) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);

    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white flex flex-col">
      <header className="flex justify-end p-6 space-x-4">
        <Link href="/cart">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-yellow-700">
            Cart ({cartItems.length})
          </button>
        </Link>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center py-16">
        <h1 className="text-5xl font-bold mb-8 text-white">Manchester United Official Store</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full max-w-7xl">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img
              src="https://mufc-live.cdn.scayle.cloud/images/032465a23bed509d050589e6439809a2.jpg"
              alt="Home Jersey"
              className="object-contain mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Home Jersey</h2>
            <p className="text-gray-600 mb-4">Size: M, L, XL</p>
            <p className="text-3xl font-semibold text-yellow-400 mb-6">฿2,590.00</p>
            <button
              onClick={() =>
                addToCart({
                  name: 'Home Jersey',
                  price: 2590,
                  image:
                    'https://mufc-live.cdn.scayle.cloud/images/032465a23bed509d050589e6439809a2.jpg',
                })
              }
              className="w-full py-3 bg-red-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img
              src="https://mufc-live.cdn.scayle.cloud/images/6324d5baa6aaf2f6110f14523e0d29ce.jpg"
              alt="Away Jersey"
              className="object-contain mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Away Jersey</h2>
            <p className="text-gray-600 mb-4">Size: M, L, XL</p>
            <p className="text-3xl font-semibold text-yellow-400 mb-6">฿2,765.00</p>
            <button
              onClick={() =>
                addToCart({
                  name: 'Away Jersey',
                  price: 2765,
                  image:
                    'https://mufc-live.cdn.scayle.cloud/images/6324d5baa6aaf2f6110f14523e0d29ce.jpg',
                })
              }
              className="w-full py-3 bg-red-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img
              src="https://mufc-live.cdn.scayle.cloud/images/9d8b1e35abd676645560a4bce2b86dca.jpg"
              alt="Away Jersey"
              className="object-contain mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Third Jersey</h2>
            <p className="text-gray-600 mb-4">Size: M, L, XL</p>
            <p className="text-3xl font-semibold text-yellow-400 mb-6">฿2,199.00</p>
            <button
              onClick={() =>
                addToCart({
                  name: 'Third Jersey',
                  price: 2199,
                  image:
                    'https://mufc-live.cdn.scayle.cloud/images/9d8b1e35abd676645560a4bce2b86dca.jpg',
                })
              }
              className="w-full py-3 bg-red-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img
              src="https://mufc-live.cdn.scayle.cloud/images/bd2356dd694291ae3af1bf82607e60fa.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff"
              alt="Away Jersey"
              className="object-contain mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Manchester United x New Era Kids Core 9Forty Cap Black</h2>
            <p className="text-gray-600 mb-4">Size: CHILD</p>
            <p className="text-3xl font-semibold text-yellow-400 mb-6">฿865.00</p>
            <button
              onClick={() =>
                addToCart({
                  name: 'Manchester United x New Era Kids Core 9Forty Cap Black',
                  price: 865,
                  image:
                    'https://mufc-live.cdn.scayle.cloud/images/bd2356dd694291ae3af1bf82607e60fa.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff',
                })
              }
              className="w-full py-3 bg-red-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img
              src="https://mufc-live.cdn.scayle.cloud/images/c017068d1888904790c1277bf6e618e5.jpg?brightness=1&width=576&height=768&quality=75&bg=ffffff"
              alt="Away Jersey"
              className="object-contain mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Manchester United x New Era 1993 Away 9Fifty Cap Black</h2>
            <p className="text-gray-600 mb-4">Size: M, L</p>
            <p className="text-3xl font-semibold text-yellow-400 mb-6">฿1,300.00</p>
            <button
              onClick={() =>
                addToCart({
                  name: 'Manchester United x New Era 1993 Away 9Fifty Cap Black',
                  price: 1300,
                  image:
                    'https://mufc-live.cdn.scayle.cloud/images/c017068d1888904790c1277bf6e618e5.jpg?brightness=1&width=576&height=768&quality=75&bg=ffffff',
                })
              }
              className="w-full py-3 bg-red-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img
              src="https://mufc-live.cdn.scayle.cloud/images/6640e1c3fb6a6ba58406b3e4959131f7.jpg?brightness=1&width=576&height=768&quality=75&bg=ffffff"
              alt="Away Jersey"
              className="object-contain mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Manchester United x New Era Terry 9Forty Cap Stone</h2>
            <p className="text-gray-600 mb-4">Size: M, L</p>
            <p className="text-3xl font-semibold text-yellow-400 mb-6">฿1,300.00</p>
            <button
              onClick={() =>
                addToCart({
                  name: 'Manchester United x New Era Terry 9Forty Cap Stone',
                  price: 1300,
                  image:
                    'https://mufc-live.cdn.scayle.cloud/images/6640e1c3fb6a6ba58406b3e4959131f7.jpg?brightness=1&width=576&height=768&quality=75&bg=ffffff',
                })
              }
              className="w-full py-3 bg-red-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
          </div>


        
        </div>
      </main>

      <footer className="text-center p-4 mt-auto bg-black">
        <p>&copy; 2024 Manchester United Fan Page. All rights reserved.</p>
      </footer>
    </div>
  );
}