"use client";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      setMessage("Registration successful!");
    } else {
      setMessage(data.error || "Registration failed");
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleRegister} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Register
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
