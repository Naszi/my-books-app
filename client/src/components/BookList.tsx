import React from "react";

export interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
    image_url: string;
}

interface Props {
    books: Book[];
    onDelete: (id: number) => void;
}

export const BookList: React.FC<Props> = ({ books, onDelete }) => (
    <div className="grid gap-4">
  {books.map(book => (
    <div key={book.id} className="p-4 bg-white rounded shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-700">Szerző: {book.author}</p>
      <p className="text-sm text-gray-500">Év: {book.year}</p>
      {book.image_url && (
        <img src={book.image_url} alt={book.title} className="mt-2 max-w-[120px] rounded" />
      )}
      <button
        onClick={() => onDelete(book.id)}
        className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Törlés
      </button>
    </div>
  ))}
</div>
);
