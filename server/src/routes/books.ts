import { Router } from "express";

interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
}

let books: Book[] = [
    { id: 1, title: "1984", author: "George Orwell", year: 1949 },
    { id: 2, title: "A tanítvány", author: "Thomas Bernhard", year: 1984 }
];

let nextId = 3;

export const booksRouter = Router();

// GET all books
booksRouter.get("/", (req, res) => {
    res.json(books);
});

// POST new book
booksRouter.post("/", (req, res) => {
    const { title, author, year } = req.body;
    const newBook = { id: nextId++, title, author, year };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT update book
booksRouter.put("/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    const { title, author, year } = req.body;

    const book = books.find(b => b.id === bookId);
    if (!book) return res.status(404).json({ error: "Book not found" });

    book.title = title;
    book.author = author;
    book.year = year;

    res.json(book);
});

// DELETE book
booksRouter.delete("/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    books = books.filter(b => b.id !== bookId);
    res.status(204).end();
});
