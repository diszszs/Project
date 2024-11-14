'use client'; // Marking this as a client component

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [showAuthMenu, setShowAuthMenu] = useState(false); // state to control the visibility of the menu

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white flex flex-col justify-between">
      {/* Header */}
      <header className="flex justify-end p-6 space-x-4">
        {/* United Store Button */}
        <Link href="/united-store" passHref>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
            United Store
          </button>
        </Link>

        {/* Sign In Button */}
        <div className="relative">
          <button
            className="px-4 py-2 bg-gray-700 text-white font-semibold rounded hover:bg-gray-600"
            onClick={() => setShowAuthMenu(!showAuthMenu)} // Toggle menu visibility on button click
          >
            Sign In
          </button>

          {/* Auth Dropdown Menu */}
          {showAuthMenu && (
            <div className="absolute top-full right-0 mt-2 w-40 bg-black bg-opacity-90 rounded-md shadow-lg z-10">
              <Link href="/login" passHref>
                <button className="w-full text-left px-4 py-2 text-white hover:bg-blue-600 rounded-t-md">
                  Log In
                </button>
              </Link>
              <Link href="/register" passHref>
                <button className="w-full text-left px-4 py-2 text-white hover:bg-blue-600 rounded-b-md">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Content in the Centered Half */}
      <main className="flex-grow flex flex-col items-center justify-start text-center pt-20">
        {/* Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="Manchester United Logo"
          width={150}
          height={150}
          className="mb-4"
        />
        <h1 className="text-5xl font-bold mb-4">Manchester United Fan Page</h1>
        <p className="text-lg">Welcome to the ultimate Manchester United fan site!</p>
        <p className="text-md mt-2 mb-8">Stay updated with the latest news, manage player info, and more.</p>

        {/* Latest Match Score Section */}
        <section className="w-full max-w-4xl p-6 bg-black bg-opacity-70 rounded-lg text-white mb-8">
          <h2 className="text-3xl font-semibold mb-4">Latest Matches</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Match</th>
                  <th className="px-4 py-2 text-left">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-800">
                  <td className="px-4 py-2">Nov 10, 2024</td>
                  <td className="px-4 py-2">Manchester United vs Leicester</td>
                  <td className="px-4 py-2 text-yellow-400">3 - 0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Nov 3, 2024</td>
                  <td className="px-4 py-2">Manchester United vs Chelsea</td>
                  <td className="px-4 py-2 text-yellow-400">1 - 1</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="px-4 py-2">Oct 31, 2024</td>
                  <td className="px-4 py-2">Manchester United vs Leicester</td>
                  <td className="px-4 py-2 text-yellow-400">5 - 2</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Nov 24, 2024</td>
                  <td className="px-4 py-2">Ipswich vs Manchester United</td>
                  <td className="px-4 py-2 text-yellow-400">11:30 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center p-4">
          <p>&copy; 2024 Manchester United Fan Page. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
