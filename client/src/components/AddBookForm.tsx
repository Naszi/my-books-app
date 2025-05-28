import React, { useState } from "react";

interface Props {
    onAdd: (title: string, author: string, year: number, imageUrl: string) => void;
}

export const AddBookForm: React.FC<Props> = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState<number | "">("");
    const [imageUrl, setImageUrl] =  useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && author && year && imageUrl) {
            onAdd(title, author, Number(year), imageUrl);
            setTitle("");
            setAuthor("");
            setYear("");
            setImageUrl("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4">
  <input
    value={title}
    onChange={e => setTitle(e.target.value)}
    placeholder="Cím"
    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <input
    value={author}
    onChange={e => setAuthor(e.target.value)}
    placeholder="Szerző"
    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <input
    type="number"
    value={year}
    onChange={e => setYear(Number(e.target.value))}
    placeholder="Év"
    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <input
    value={imageUrl}
    onChange={e => setImageUrl(e.target.value)}
    placeholder="Kép URL"
    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
  >
    Hozzáadás
  </button>
</form>

    );
};
