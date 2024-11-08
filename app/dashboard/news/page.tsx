"use client";
import { useState, useEffect } from 'react';

type News = {
  id: number;
  title: string;
  content: string;
  author: string;
};

export default function ManageNews() {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [newArticle, setNewArticle] = useState({ title: '', content: '', author: '' });

  useEffect(() => {
    async function fetchNews() {
      const res = await fetch('/api/news');
      const data = await res.json();
      setNewsList(data);
    }
    fetchNews();
  }, []);

  async function addNews() {
    const res = await fetch('/api/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newArticle),
    });
    if (res.ok) {
      const addedArticle = await res.json();
      setNewsList([...newsList, addedArticle]);
      setNewArticle({ title: '', content: '', author: '' });
    }
  }

  async function deleteNews(id: number) {
    const res = await fetch(`/api/news/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setNewsList(newsList.filter((article) => article.id !== id));
    }
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Manage News</h1>
      
      <ul className="space-y-4 mb-8">
        {newsList.map((article) => (
          <li key={article.id} className="p-4 border rounded-lg bg-white shadow flex justify-between items-center">
            <span className="text-lg font-medium">{article.title} - {article.author}</span>
            <button onClick={() => deleteNews(article.id)} className="text-red-500 hover:text-red-600 transition ease-in-out duration-200">Delete</button>
          </li>
        ))}
      </ul>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={newArticle.title}
          onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
          className="p-3 border rounded w-full"
        />
        <textarea
          placeholder="Content"
          value={newArticle.content}
          onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
          className="p-3 border rounded w-full h-32"
        />
        <input
          type="text"
          placeholder="Author"
          value={newArticle.author}
          onChange={(e) => setNewArticle({ ...newArticle, author: e.target.value })}
          className="p-3 border rounded w-full"
        />
        <button onClick={addNews} className="p-3 bg-blue-500 text-white rounded w-full hover:bg-blue-600 transition ease-in-out duration-200">
          Add News
        </button>
      </div>
    </div>
  );
}
