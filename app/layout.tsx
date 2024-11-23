import type { Metadata } from "next";
import localFont from "next/font/local";
import UserNavbar from "./components/UserNavbar"; // ใช้ UserNavbar
import { getServerSession } from "next-auth/next"; // ใช้สำหรับดึง Session
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "This is an improved layout for the app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ดึง Session เพื่อรับชื่อผู้ใช้
  const session = await getServerSession();
  const username = session?.user?.name || "Guest"; // ใช้ "Guest" หากไม่มีข้อมูล Session

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* ส่ง username ไปยัง UserNavbar */}
        <UserNavbar username={username} />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
