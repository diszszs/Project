"use client";
import { useState, useEffect } from 'react';

type Player = {
  id: number;
  name: string;
  position: string;
  nationality: string;
  age: number;
};

export default function ManagePlayers() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [newPlayer, setNewPlayer] = useState({ name: '', position: '', nationality: '', age: 0 });

  useEffect(() => {
    async function fetchPlayers() {
      const res = await fetch('/api/players');
      const data = await res.json();
      setPlayers(data);
    }
    fetchPlayers();
  }, []);

  async function addPlayer() {
    const res = await fetch('/api/players', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPlayer),
    });
    if (res.ok) {
      const addedPlayer = await res.json();
      setPlayers([...players, addedPlayer]);
      setNewPlayer({ name: '', position: '', nationality: '', age: 0 });
    }
  }

  async function deletePlayer(id: number) {
    const res = await fetch(`/api/players/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setPlayers(players.filter((player) => player.id !== id));
    }
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Manage Players</h1>

      <ul className="space-y-4 mb-8">
        {players.map((player) => (
          <li key={player.id} className="p-4 border rounded-lg bg-white shadow flex justify-between items-center">
            <span className="text-lg font-medium">{player.name} - {player.position}</span>
            <button onClick={() => deletePlayer(player.id)} className="text-red-500 hover:text-red-600 transition ease-in-out duration-200">Delete</button>
          </li>
        ))}
      </ul>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={newPlayer.name}
          onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
          className="p-3 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Position"
          value={newPlayer.position}
          onChange={(e) => setNewPlayer({ ...newPlayer, position: e.target.value })}
          className="p-3 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Nationality"
          value={newPlayer.nationality}
          onChange={(e) => setNewPlayer({ ...newPlayer, nationality: e.target.value })}
          className="p-3 border rounded w-full"
        />
        <input
          type="number"
          placeholder="Age"
          value={newPlayer.age}
          onChange={(e) => setNewPlayer({ ...newPlayer, age: Number(e.target.value) })}
          className="p-3 border rounded w-full"
        />
        <button onClick={addPlayer} className="p-3 bg-green-500 text-white rounded w-full hover:bg-green-600 transition ease-in-out duration-200">
          Add Player
        </button>
      </div>
    </div>
  );
}
