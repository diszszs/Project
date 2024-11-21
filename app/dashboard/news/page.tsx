import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function NewsDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage News</h1>
        <p className="text-gray-600">
          This section allows you to manage news articles.
        </p>
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h2 className="text-lg font-bold text-gray-800">Add New Article</h2>
          <form className="mt-4">
            <input
              type="text"
              placeholder="Title"
              className="w-full mb-4 px-4 py-2 border rounded"
            />
            <textarea
              placeholder="Content"
              className="w-full mb-4 px-4 py-2 border rounded"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
