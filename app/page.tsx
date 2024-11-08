import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white flex flex-col justify-between">
      {/* Header */}
      <header className="flex justify-end p-6 space-x-4">
        {/* Navigation Buttons */}
        <Link href="/dashboard/news" passHref>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-yellow-600">
            Latest News
          </button>
        </Link>
        <Link href="/dashboard/players" passHref>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
            Player Management
          </button>
        </Link>
        <Link href="/dashboard/admin" passHref>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-green-600">
            Admin Dashboard
          </button>
        </Link>
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
        <div className="bg-black bg-opacity-60 p-6 rounded-lg text-white w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Latest Match Score</h2>
          <div className="flex justify-between items-center text-lg font-semibold">
            <span>Manchester United</span>
            <span className="text-yellow-400">2 - 1</span>
            <span>Chelsea FC</span>
          </div>
          <p className="mt-2 text-gray-300">Premier League - 6 Nov 2024</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-4">
        <p>&copy; 2024 Manchester United Fan Page. All rights reserved.</p>
      </footer>
    </div>
  );
}
