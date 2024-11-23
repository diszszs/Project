'use client'; 

import { useState, useEffect } from 'react';

type Match = {
  id: number;
  date: string; 
  teams: string;
  score: string;
};

export default function HomePage() {
  const [matches, setMatches] = useState<Match[]>([]); 

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white flex flex-col justify-between">

      <header className="flex justify-end p-6 space-x-4"></header>

      <main className="flex-grow flex flex-col items-center justify-start text-center pt-0">

        <img
          src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          alt="Manchester United Logo"
          width={150}
          height={150}
          className="mb-4"
        />
        <h1 className="text-5xl font-bold mb-4">Manchester United Fan Page</h1>
        <p className="text-lg mb-8">
          Welcome to the ultimate Manchester United fan site! Stay updated with the latest news, manage player info, and more.
        </p>

        <section className="w-full max-w-4xl p-6 bg-black bg-opacity-70 rounded-lg text-white mb-8">
          <h2 className="text-3xl font-semibold mb-4">About Manchester United</h2>
          <div className="flex flex-col items-center justify-center">
            <p className="mb-4">
              Manchester United Football Club is one of the most iconic and successful football clubs in the world, founded
              in 1878. Known for its legendary history, Manchester United has a rich legacy of domestic and international
              successes.
            </p>
            <img
              src="https://wallpaperaccess.com/full/4295830.jpg"
              alt="Old Trafford"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <p className="text-lg font-semibold">Old Trafford – The Theatre of Dreams</p>
          </div>
        </section>

        <section className="w-full max-w-4xl p-6 bg-black bg-opacity-70 rounded-lg text-white mb-8">
          <h2 className="text-3xl font-semibold mb-4">Latest Matches</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left w-1/3">Date</th>
                  <th className="px-4 py-2 text-center w-1/3">Match</th>
                  <th className="px-4 py-2 text-right w-1/3">Score</th>
                </tr>
              </thead>
              <tbody>
                {matches.map((match, index) => (
                  <tr key={match.id} className={index % 2 === 0 ? 'bg-gray-800' : ''}>
                    <td className="px-4 py-2 text-left">{new Date(match.date).toLocaleDateString()}</td>
                    <td className="px-4 py-2 text-center">{match.teams}</td>
                    <td className="px-4 py-2 text-right text-yellow-400">{match.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="w-full max-w-4xl p-6 bg-black bg-opacity-70 rounded-lg text-white mb-8">
          <h2 className="text-3xl font-semibold mb-4">A Legendary Track Record</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://static0.givemesportimages.com/wordpress/wp-content/uploads/2024/05/manchester-united-fa-cup.jpg"
                alt="Manchester United Trophies"
                className="object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Manchester United Trophies</h3>
              <p className="text-gray-600">The Emirates FA Cup winner 2023/24 season!!</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://th.bing.com/th/id/R.36b9ab4e41c8056d334e28f8735986b5?rik=hf6YVR658P5fPg&riu=http%3a%2f%2fplatform-static-files.s3.amazonaws.com%2fpremierleague%2fphoto%2f2016%2f06%2f01%2f0e39ca26-dd5b-4974-920c-60a45b2d65a0%2fman-utd-champions-2007-2008.jpg&ehk=xVgcgqK31p1kxfneyaOndlkDT0bbHvpOuGmtYVJyY8A%3d&risl=&pid=ImgRaw&r=0"
                alt="Premier League Trophies"
                className="object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Premier League Champions</h3>
              <p className="text-gray-600">Manchester United's Premier League 2007/08 victories!</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://th.bing.com/th/id/R.5d525f495a9bcae2a7fc3f5b14e6f6a6?rik=jB1QgEtlkk1HLg&pid=ImgRaw&r=0"
                alt="Champions League Trophies"
                className="object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">UEFA Champions League</h3>
              <p className="text-gray-600">Manchester United's historic Champions League 2007/08 wins!</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center p-4 mt-auto">
        <p>&copy; 2024 Manchester United Fan Page. All rights reserved.</p>
      </footer>
    </div>
  );
}
