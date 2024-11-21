import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Dashboard() {
  const userName = "Admin"; 

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar userName={userName} />
      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to the Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">Manage News</h2>
            <p className="text-gray-600 mt-2">Add, update, or delete news articles.</p>
            <a
              href="/dashboard/news"
              className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Go to News
            </a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">Manage Players</h2>
            <p className="text-gray-600 mt-2">Add, update, or delete player profiles.</p>
            <a
              href="/dashboard/players"
              className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Go to Players
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}