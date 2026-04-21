const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get("/welcome", (req, res) => {
  res.send("Welcome to my server !");
});

app.post("/submit", (req, res) => {
  console.log("Data from client:", req.body);
  res.send("Data received");
});

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
];

app.get("/users", (req, res) => {
    res.status(200).json(users);
});

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
