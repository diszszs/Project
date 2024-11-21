'use client';

import { useState, useEffect } from 'react';

const mockNews = [
  {
    id: 1,
    title: 'Manchester United Triumph in FA Cup',
    description:
      'Manchester United defeated their rivals in a thrilling match to win the FA Cup.',
    imageUrl: 'https://via.placeholder.com/150',
    publishedAt: '2024-11-22',
  },
  {
    id: 2,
    title: 'New Manager Announced',
    description:
      'Manchester United has appointed a new manager to lead the team for the upcoming season.',
    imageUrl: 'https://via.placeholder.com/150',
    publishedAt: '2024-11-20',
  },
];

export default function NewsPage() {
  const [news, setNews] = useState(mockNews);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('/api/news');
        const data = await response.json();

        if (response.ok) {
          setNews(
            data.map((article: any, index: number) => ({
              id: index,
              title: article.title,
              description: article.description,
              imageUrl: article.urlToImage || 'https://via.placeholder.com/150',
              publishedAt: new Date(article.publishedAt).toLocaleDateString(),
            }))
          );
        } else {
          console.error('Failed to fetch news:', data.error);
          setError('Failed to fetch news. Showing mock data.');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to fetch news. Showing mock data.');
      }
    }

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Latest News</h1>
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((article) => (
          <div
            key={article.id}
            className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-700 mb-2">{article.description}</p>
              <p className="text-xs text-gray-500">
                Published: {article.publishedAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
