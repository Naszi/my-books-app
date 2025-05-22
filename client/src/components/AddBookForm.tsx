import React, { useState } from "react";

interface Props {
    onAdd: (title: string, author: string, year: number) => void;
}

export const AddBookForm: React.FC<Props> = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState<number | "">("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && author && year) {
            onAdd(title, author, Number(year));
            setTitle("");
            setAuthor("");
            setYear("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="book-form">
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Cím" />
            <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Szerző" />
            <input type="number" value={year} onChange={e => setYear(Number(e.target.value))} placeholder="Év" />
            <button type="submit">Hozzáadás</button>
        </form>
    );
};
