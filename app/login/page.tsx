"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // Save token in localStorage or cookies
      localStorage.setItem('token', data.token);
      setMessage('Login successful!');
      router.push('/dashboard'); // Redirect to the dashboard
    } else {
      setMessage(data.error || 'Login failed');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white flex flex-col justify-center items-center">
      {/* Logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
        alt="Manchester United Logo"
        width={150}
        height={150}
        className="mb-8"
      />
      <h1 className="text-5xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="w-full max-w-md space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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