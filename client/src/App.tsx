import { useEffect, useState } from "react";
import { type Book, BookList } from "./components/BookList";
import { AddBookForm } from "./components/AddBookForm";
import "./App.css";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const res = await fetch("http://localhost:3000/api/books");
    const data = await res.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async (title: string, author: string, year: number) => {
    const res = await fetch("http://localhost:3000/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author, year }),
    });
    const newBook = await res.json();
    setBooks((prev) => [...prev, newBook]);
  };

  const deleteBook = async (id: number) => {
    await fetch(`http://localhost:3000/api/books/${id}`, { method: "DELETE" });
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  const [searchTerm, setSearchTerm] = useState("");
  const filteredBooks = books.filter(b =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app space-y-4 p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center my-4">Könyvek</h1>
      <input
          type="text"
          placeholder="Keresés cím vagy szerző alapján..."
          className="w-full p-2 border rounded mb-4"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
      />
      <BookList books={filteredBooks} onDelete={deleteBook} />
      <AddBookForm onAdd={addBook} />
      <BookList books={books} onDelete={deleteBook} />
    </div>
  );
}

export default App;
