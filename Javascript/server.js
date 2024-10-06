// server.js
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database"); // Import the database connection

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static("public")); // Serve static files (your HTML, CSS, etc.)

// Route to create a new quiz
app.post("/api/quizzes", (req, res) => {
  const { title } = req.body;
  db.run(`INSERT INTO quizzes (title) VALUES (?)`, [title], function (err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(201).json({ id: this.lastID, title });
  });
});

// Route to get all quizzes
app.get("/api/quizzes", (req, res) => {
  db.all(`SELECT * FROM quizzes`, [], (err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(rows);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
