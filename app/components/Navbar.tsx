import Link from 'next/link';

interface NavbarProps {
  userName?: string; // รับชื่อผู้ใช้จาก props
}

export default function Navbar({ userName }: NavbarProps) {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/news" className="hover:underline">
              Manage News
            </Link>
          </li>
          <li>
            <Link href="/dashboard/players" className="hover:underline">
              Manage Players
            </Link>
          </li>
        </ul>
        <div className="text-white font-semibold">
          {userName ? `Welcome, ${userName}` : "Guest"}
        </div>
      </div>
    </nav>
  );
}
