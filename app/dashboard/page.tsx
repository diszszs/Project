"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

type Match = {
  id: number;
  date: string;
  teams: string;
  score: string;
};

export default function Dashboard() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [editingMatch, setEditingMatch] = useState<Match | null>(null);
  const [date, setDate] = useState('');
  const [teams, setTeams] = useState('');
  const [score, setScore] = useState('');
  const [message, setMessage] = useState('');

  // Fetch matches on page load
  useEffect(() => {
    async function fetchMatches() {
      try {
        const res = await fetch('/api/matches');
        const data = await res.json();

        if (res.ok) {
          setMatches(data);
        } else {
          console.error('Failed to fetch matches');
        }
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    }

    fetchMatches();
  }, []);

  // Add a new match
  async function handleAddMatch(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch('/api/matches', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date, teams, score }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Match added successfully!');
        setMatches((prev) => [...prev, data.match]);
        setDate('');
        setTeams('');
        setScore('');
      } else {
        setMessage('Failed to add match');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    }
  }

  // Update a match
  async function handleUpdateMatch(e: React.FormEvent) {
    e.preventDefault();

    if (!editingMatch) return;

    try {
      const res = await fetch('/api/matches', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingMatch),
      });

      const updatedMatch = await res.json();

      if (res.ok) {
        setMessage('Match updated successfully!');
        setMatches((prev) =>
          prev.map((match) => (match.id === updatedMatch.id ? updatedMatch : match))
        );
        setEditingMatch(null);
      } else {
        setMessage('Failed to update match');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    }
  }

  // Delete a match
  async function handleDeleteMatch(id: number) {
    try {
      const res = await fetch('/api/matches', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setMessage('Match deleted successfully!');
        setMatches((prev) => prev.filter((match) => match.id !== id)); // Remove from UI
      } else {
        setMessage('Failed to delete match');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar userName="Admin" />

      {/* Home Button */}
      <div className="flex justify-start p-6">
        <a
          href="/"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
        >
          Home
        </a>
      </div>

      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Dashboard</h1>

        {/* Add Match Form */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Match</h2>
          <form onSubmit={handleAddMatch} className="space-y-4">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              required
            />
            <input
              type="text"
              placeholder="Teams (e.g., Manchester United vs Chelsea)"
              value={teams}
              onChange={(e) => setTeams(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              required
            />
            <input
              type="text"
              placeholder="Score (e.g., 3 - 1)"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Match
            </button>
          </form>
        </section>

        {/* Matches List */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Matches</h2>
          <ul className="space-y-4">
            {matches.map((match) => (
              <li key={match.id} className="p-4 bg-white shadow-md rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <strong>Date:</strong> {new Date(match.date).toLocaleDateString()}
                    </p>
                    <p>
                      <strong>Teams:</strong> {match.teams}
                    </p>
                    <p>
                      <strong>Score:</strong> {match.score}
                    </p>
                  </div>
                  <div className="space-x-4">
                    <button
                      onClick={() => setEditingMatch(match)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteMatch(match.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Edit Match Form */}
        {editingMatch && (
          <section className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Match</h2>
            <form onSubmit={handleUpdateMatch} className="space-y-4">
              <input
                type="date"
                value={new Date(editingMatch.date).toISOString().split('T')[0]}
                onChange={(e) =>
                  setEditingMatch({ ...editingMatch, date: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-md text-black"
                required
              />
              <input
                type="text"
                placeholder="Teams (e.g., Manchester United vs Chelsea)"
                value={editingMatch.teams}
                onChange={(e) =>
                  setEditingMatch({ ...editingMatch, teams: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-md text-black"
                required
              />
              <input
                type="text"
                placeholder="Score (e.g., 3 - 1)"
                value={editingMatch.score}
                onChange={(e) =>
                  setEditingMatch({ ...editingMatch, score: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-md text-black"
                required
              />
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditingMatch(null)}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}