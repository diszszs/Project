"use client";
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Dashboard</h1>
      <div className="w-full max-w-md space-y-4">
        <Link href="/dashboard/news">
          <div className="block p-6 border rounded-lg bg-black text-white hover:bg-blue-600 transition ease-in-out duration-200">
            <h2 className="text-2xl font-semibold">Manage News</h2>
          </div>
        </Link>
        <Link href="/dashboard/players">
          <div className="block p-6 border rounded-lg bg-red-500 text-white hover:bg-green-600 transition ease-in-out duration-200">
            <h2 className="text-2xl font-semibold">Manage Players</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
