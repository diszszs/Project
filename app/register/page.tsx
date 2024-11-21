"use client";
import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  // Handle the form submission for registration
  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });

    const data = await res.json();
    
    if (res.ok) {
      setMessage('Registration successful!');
    } else {
      setMessage(data.error || 'Registration failed');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white flex flex-col justify-between">
      {/* Header */}
      <header className="p-6 text-center">
        <h1 className="text-5xl font-bold">Register</h1>
      </header>

      {/* Content in the Centered Half */}
      <main className="flex-grow flex flex-col items-center justify-start text-center pt-20">
        {/* Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="Manchester United Logo"
          width={150}
          height={150}
          className="mb-6"
        />
        <form onSubmit={handleRegister} className="flex flex-col space-y-4 w-full max-w-md">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2 border border-gray-300 rounded text-black"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-2 border border-gray-300 rounded text-black"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded text-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded text-black"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded hover:bg-yellow-600 transition ease-in-out duration-200"
          >
            Register
          </button>
        </form>
        {message && <p className="mt-4">{message}</p>}
      </main>

      {/* Footer */}
      <footer className="text-center p-4">
        <p>&copy; 2024 Manchester United Fan Page. All rights reserved.</p>
      </footer>
    </div>
  );
}
