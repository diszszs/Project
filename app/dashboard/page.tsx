// app/dashboard/page.tsx
"use client"; // เพิ่มบรรทัดนี้ที่ด้านบนสุดเพื่อให้ไฟล์นี้เป็น Client Component

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ใช้ next/navigation สำหรับการเปลี่ยนเส้นทางใน client component

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // ตรวจสอบสถานะของผู้ใช้
  useEffect(() => {
    if (status === "loading") return; // รอโหลดข้อมูล session
    if (status === "unauthenticated" || session?.user?.role !== "admin") {
      router.push("/login"); // ถ้าไม่ใช่ admin ให้ส่งไปหน้า login
    }
  }, [status, session, router]);

  if (status === "loading") {
    return <p>Loading...</p>; // แสดงข้อความ Loading ระหว่างรอข้อมูล session
  }

  if (session?.user?.role !== "admin") {
    return null; // ถ้าไม่ใช่ admin ให้ไม่แสดงเนื้อหาใด ๆ
  }

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
