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
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-gray-600"
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

      <main className="flex-grow flex flex-col items-center justify-start text-center pt-0"> 
        {/* Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="Manchester United Logo"
          width={150}
          height={150}
          className="mb-4"
        />
        <h1 className="text-5xl font-bold mb-4">Manchester United Fan Page</h1>
        <p className="text-lg mb-8">Welcome to the ultimate Manchester United fan site! Stay updated with the latest news, manage player info, and more.</p>

        {/* Club Overview Section */}
        <section className="w-full max-w-4xl p-6 bg-black bg-opacity-70 rounded-lg text-white mb-8">
          <h2 className="text-3xl font-semibold mb-4">About Manchester United</h2>
          <div className="flex flex-col items-center justify-center">
            <p className="mb-4">Manchester United Football Club is one of the most iconic and successful football clubs in the world, founded in 1878. Known for its legendary history, Manchester United has a rich legacy of domestic and international successes.</p>
            <img
              src="https://wallpaperaccess.com/full/4295830.jpg"
              alt="Old Trafford"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <p className="text-lg font-semibold">Old Trafford – The Theatre of Dreams</p>
          </div>
        </section>

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
                <tr>
                  <td className="px-4 py-2">Nov 24, 2024</td>
                  <td className="px-4 py-2">Ipswich vs Manchester United</td>
                  <td className="px-4 py-2 text-yellow-400">11:30 PM</td>
                </tr>
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
              </tbody>
            </table>
          </div>
        </section>

        {/* Trophies Section with 3 boxes */}
        <section className="w-full max-w-4xl p-6 bg-black bg-opacity-70 rounded-lg text-white mb-8">
          <h2 className="text-3xl font-semibold mb-4">A Legendary Track Record</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Trophies Box 1 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://static0.givemesportimages.com/wordpress/wp-content/uploads/2024/05/manchester-united-fa-cup.jpg"
                alt="Manchester United Trophies"
                width={400}
                height={400}
                className="object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Manchester United Trophies</h3>
              <p className="text-gray-600">The Emirates FA Cup winner 2023/24 season!!</p>
            </div>
            {/* Trophies Box 2 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://th.bing.com/th/id/R.36b9ab4e41c8056d334e28f8735986b5?rik=hf6YVR658P5fPg&riu=http%3a%2f%2fplatform-static-files.s3.amazonaws.com%2fpremierleague%2fphoto%2f2016%2f06%2f01%2f0e39ca26-dd5b-4974-920c-60a45b2d65a0%2fman-utd-champions-2007-2008.jpg&ehk=xVgcgqK31p1kxfneyaOndlkDT0bbHvpOuGmtYVJyY8A%3d&risl=&pid=ImgRaw&r=0"
                alt="Premier League Trophies"
                width={400}
                height={400}
                className="object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Premier League Champions</h3>
              <p className="text-gray-600">Manchester United's Premier League 2007/08 victories!</p>
            </div>
            {/* Trophies Box 3 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://th.bing.com/th/id/R.5d525f495a9bcae2a7fc3f5b14e6f6a6?rik=jB1QgEtlkk1HLg&pid=ImgRaw&r=0"
                alt="Champions League Trophies"
                width={400}
                height={400}
                className="object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">UEFA Champions League</h3>
              <p className="text-gray-600">Manchester United's historic Champions League 2007/08 wins!</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center p-4 mt-auto">
          <p>&copy; 2024 Manchester United Fan Page. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

