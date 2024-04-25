import 'dotenv/config'
import express from "express";
import cors from "cors";
import mysql from 'mysql2/promise';

const app = express();
app.use(cors());
app.use(express.json());
let connection;
try {

  console.log(process.env.MYSQL_HOST);

  connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: 3306, 
  });
  console.log("Backend is Connected to MySQL");
} catch (err) {
  console.log(err);
}


app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/books", async(req, res) => {
  try {
    const q = 'SELECT * FROM books';
  
    const [rows, fields] = await connection.query(q);
  
    console.log(rows);
    console.log(fields);
    return res.json(rows);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

app.post("/books", async(req, res) => {
  const q = "INSERT INTO books(`title`, `desc`, `price`, `cover`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  try {
    const [rows, fields] = await connection.query(q, [values]);
    console.log(rows);
    console.log(fields);
    return res.json(rows);

  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

app.delete("/books/:id", async(req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM books WHERE id = ? ";

  try {
    const [rows, fields] = await connection.query(q, [bookId]);
    console.log(rows);
    console.log(fields);
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.send(error)
  }
});

app.put("/books/:id", async(req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  try {
    const [rows, fields] = await connection.query(q, [...values, bookId]);
    console.log(rows);
    console.log(fields);
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.send(error)
  }
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
