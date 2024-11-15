// app/united-store/home-jersey.tsx
'use client'; // Required if you're using useState or other hooks

import { useState } from 'react';
import Link from 'next/link';

export default function HomeJersey() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Home Jersey Details</h1>
      <img
        src="https://mufc-live.cdn.scayle.cloud/images/032465a23bed509d050589e6439809a2.jpg"
        alt="Home Jersey"
        className="object-contain mb-4"
        width={500}
        height={500}
      />
      <p className="text-xl text-yellow-400">Price: ฿2,590.00</p>
      <p className="text-lg mt-2">Size: M, L, XL</p>
      <button className="mt-4 py-2 px-6 bg-red-600 text-white font-semibold rounded">Add to Cart</button>

      <div className="mt-8">
        <Link href="/united-store">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
            Back to Store
          </button>
        </Link>
      </div>
    </div>
  );
}
