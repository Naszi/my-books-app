import { Pool } from "pg";

export const db = new Pool({
    host: process.env.DB_HOST,      // db
    port: parseInt(process.env.DB_PORT || "5432"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
