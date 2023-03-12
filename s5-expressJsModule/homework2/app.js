const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "simplle.html"));
});

app.get("/users", (req, res, next) => {
  res.sendFile(path.join(__dirname, "users.html"));
});

app.listen(3000);
