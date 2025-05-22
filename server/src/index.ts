import express from "express";
import cors from "cors";
import { booksRouter } from "./routes/books.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/books", booksRouter);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
