"use client"; // Marking this as a client component

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  // User Login State
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // Admin Login State
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  // Shared State
  const [message, setMessage] = useState("");
  const [showAdminForm, setShowAdminForm] = useState(false); // Toggle for admin form
  const router = useRouter();

  async function handleUserLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, password: userPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save token and role in cookies
        document.cookie = `token=${data.token}; path=/; max-age=3600`; // Token valid for 1 hour
        document.cookie = `role=${data.role}; path=/; max-age=3600`; // Save role
        document.cookie = `firstName=${data.firstName}; path=/; max-age=3600`; // Save user's first name
        document.cookie = `lastName=${data.lastName}; path=/; max-age=3600`; // Save user's last name

        setMessage("Login successful!");

        // Redirect based on role
        if (data.role === "admin") {
          router.push("/dashboard"); // Redirect admin to the dashboard
        } else {
          router.push("/"); // Redirect normal users to the homepage
        }
      } else {
        setMessage(data.error || "Login failed");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
  }

  async function handleAdminLogin(e: React.FormEvent) {
    e.preventDefault(); // Prevent page reload on form submission

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: adminEmail, password: adminPassword }),
      });

      const data = await res.json();

      if (res.ok && data.role === "admin") {
        // Save admin session data
        document.cookie = `token=${data.token}; path=/; max-age=3600`;
        document.cookie = `role=${data.role}; path=/; max-age=3600`;
        document.cookie = `firstName=${data.firstName}; path=/; max-age=3600`;
        document.cookie = `lastName=${data.lastName}; path=/; max-age=3600`;

        router.push("/dashboard");
      } else {
        setMessage("Only admin can access this page");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white flex flex-col justify-center items-center relative">
      {/* Admin Button */}
      <button
        onClick={() => setShowAdminForm(!showAdminForm)}
        className="absolute top-6 right-6 px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600"
      >
        Admin Login
      </button>

      {/* Admin Login Form */}
      {showAdminForm && (
        <div className="absolute top-20 right-6 bg-black bg-opacity-70 p-6 rounded-md shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
          <form onSubmit={handleAdminLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Admin Email"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black"
            />
            <input
              type="password"
              placeholder="Admin Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
          {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
      )}

      {/* Logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
        alt="Manchester United Logo"
        width={150}
        height={150}
        className="mb-2"
      />
      <h1 className="text-5xl font-bold mb-4">Login</h1>
      <form onSubmit={handleUserLogin} className="w-full max-w-md space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md text-black"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-yellow-600"
        >
          Login
        </button>
      </form>
      {message && <p className="mt-4 text-lg">{message}</p>}

      {/* Footer */}
      <footer className="text-center p-4 mt-8">
        <p>&copy; 2024 Manchester United Fan Page. All rights reserved.</p>
      </footer>
    </div>
  );
}
