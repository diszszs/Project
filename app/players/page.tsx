'use client';

import { useState, useEffect } from 'react';

type Player = {
  id: number;
  name: string;
  shirtNumber: string;
  imageUrl: string;
};

export default function PlayersPage() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    async function fetchPlayers() {
      const playersData = [
        { id: 1, name: 'Cristiano Ronaldo', shirtNumber: '7', imageUrl: 'https://example.com/ronaldo.jpg' },
        { id: 2, name: 'Bruno Fernandes', shirtNumber: '8', imageUrl: 'https://example.com/bruno.jpg' },
      ];
      setPlayers(playersData);
    }
    fetchPlayers();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold text-center p-6">Manchester United Players</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {players.map((player) => (
          <div key={player.id} className="bg-white text-black p-4 rounded-lg shadow-md">
            <img src={player.imageUrl} alt={player.name} className="rounded-lg mb-4" />
            <h2 className="text-xl font-semibold">{player.name}</h2>
            <p>Shirt Number: {player.shirtNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
