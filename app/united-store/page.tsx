import Link from 'next/link';

export default function UnitedStore() {
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
        
        {/* Latest News Link */}
        <Link href="/dashboard/news">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
            Latest News
          </button>
        </Link>

        {/* Player Management Link */}
        <Link href="/dashboard/players">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-green-600">
            Player Management
          </button>
        </Link>
      </header>

      {/* United Store Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center py-16">
        <h1 className="text-5xl font-bold mb-8 text-white">Manchester United Official Store</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full max-w-7xl">
          {/* Home Jersey */}
          <div className="bg-white p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img src="https://mufc-live.cdn.scayle.cloud/images/032465a23bed509d050589e6439809a2.jpg" alt="Home Jersey" width={400} height={400} className="object-contain mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">Manchester United Home Jersey</h2>
            <p className="text-gray-600">Size: M, L, XL</p>
            <p className="text-2xl font-semibold text-yellow-400">฿2,590.00</p>
            <button className="mt-4 w-full py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700">
              Home Jersey
            </button>
          </div>

          {/* Away Jersey */}
          <div className="bg-white p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img src="https://mufc-live.cdn.scayle.cloud/images/6324d5baa6aaf2f6110f14523e0d29ce.jpg?brightness=1&width=576&height=768&quality=75&bg=ffffff" alt="Away Jersey" width={400} height={400} className="object-contain mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">Manchester United Away Jersey</h2>
            <p className="text-gray-600">Size: M, L, XL</p>
            <p className="text-2xl font-semibold text-yellow-400">฿2,765.00</p>
            <button className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
              Away Jersey
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
