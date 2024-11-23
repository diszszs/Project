import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Use Dashboard-specific Navbar */}
      <Navbar userName="Admin" />
      <main className="flex-grow container mx-auto p-6">{children}</main>
      <Footer />
    </div>
  );
}
