export default function Unauthorized() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800">Access Denied</h1>
        <p className="text-gray-600 mt-4">
          You do not have permission to access this page.
        </p>
        <a
          href="/"
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go Back to Home
        </a>
      </div>
    );
  }
  