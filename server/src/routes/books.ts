import { Router } from "express";
import { db } from "../db/db.js";

interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
}

export const booksRouter = Router();

// GET all books
booksRouter.get("/", async (_req, res) => {
    const result = await db.query("SELECT * FROM books ORDER BY id");
    res.json(result.rows);
});

// POST new book
booksRouter.post("/", async (req, res) => {
    const { title, author, year, image_url } = req.body;
    const result = await db.query(
        "INSERT INTO books (title, author, year, image_url) VALUES ($1, $2, $3, $4) RETURNING *",
        [title, author, year, image_url]
    );
    res.status(201).json(result.rows[0]);
});

// PUT update book
booksRouter.put("/:id", async (req, res) => {
    const { title, author, year, image_url } = req.body;
    const result = await db.query(
        "UPDATE books SET title=$1, author=$2, year=$3, image_url=$4 WHERE id=$5 RETURNING *",
        [title, author, year, image_url, req.params.id]
    );
    if (result.rowCount === 0) return res.status(404).json({ error: "Book not found" });
    res.json(result.rows[0]);
});

// DELETE book
booksRouter.delete("/:id", async (req, res) => {
    const result = await db.query("DELETE FROM books WHERE id=$1", [req.params.id]);
    res.status(204).end();
});
