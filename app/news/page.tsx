'use client';

import { useEffect, useState } from 'react';

type NewsArticle = {
  title: string;
  description: string;
  link: string;
  image_url: string;
  pubDate: string;
};

export default function NewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('/api/news');
        const data = await response.json();
        if (response.ok) {
          setArticles(data);
        } else {
          setError('Failed to fetch news');
        }
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to fetch news.');
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) {
    return <p className="text-center text-lg text-white">Loading news...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white p-8">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-100 drop-shadow-md">
        Latest News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          >
            {article.image_url ? (
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-56 object-cover"
              />
            ) : (
              <div className="w-full h-56 bg-gray-600 flex items-center justify-center text-gray-300 text-xl">
                No Image
              </div>
            )}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
              <p className="text-sm text-gray-300 mb-6">
                {article.description || 'No description available.'}
              </p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-400 hover:text-blue-300 underline text-sm font-semibold"
              >
                Read more →
              </a>
              <p className="text-xs text-gray-400 mt-4">
                Published: {new Date(article.pubDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
