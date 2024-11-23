import type { Metadata } from "next";
import localFont from "next/font/local";
import UserNavbar from "./components/UserNavbar";
import Navbar from "./components/Navbar"; // Import the Navbar
import { getServerSession } from "next-auth/next"; // For server-side session
import "./globals.css";

// Use local fonts
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

// Helper to check if the current route is "dashboard"
function isDashboardPath(pathname: string) {
  return pathname.startsWith("/dashboard");
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  const username = session?.user?.name || "Guest";

  // Use server-side pathname extraction
  const pathname =
    typeof window === "undefined" ? "" : window.location.pathname;

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* Conditionally render Navbar or UserNavbar */}
        {isDashboardPath(pathname) ? (
          <Navbar userName={username} />
        ) : (
          <UserNavbar username={username} />
        )}
        <main className="min-h-screen flex flex-col">{children}</main>
      </body>
    </html>
  );
}
    