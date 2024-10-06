// database.js
const sqlite3 = require("sqlite3").verbose();

// Connect to SQLite database (it will create the file if it doesn't exist)
const db = new sqlite3.Database("./quizApp.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the quizApp database.");
});

// Create tables for quizzes, questions, and answers
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS quizzes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    quiz_id INTEGER,
    question_text TEXT NOT NULL,
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS answers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question_id INTEGER,
    answer_text TEXT NOT NULL,
    is_correct BOOLEAN,
    FOREIGN KEY (question_id) REFERENCES questions(id)
  )`);
});

module.exports = db;
