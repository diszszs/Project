import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-end p-6 space-x-4">
      <Link href="/united-store">
        <a>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
            United Store
          </button>
        </a>
      </Link>
    </nav>
  );
}
