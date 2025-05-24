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
    <div className="book-list">
        {books.map(book => (
            <div key={book.id} className="book-card">
                <h3>{book.title}</h3>
                <img src={book.image_url} alt={book.title} style={{ maxWidth: "100px" }} />
                <p><strong>Szerző:</strong> {book.author}</p>
                <p><strong>Év:</strong> {book.year}</p>
                <button onClick={() => onDelete(book.id)}>Törlés</button>
            </div>
        ))}
    </div>
);
