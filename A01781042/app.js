// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/hello-mars", (req, res) => {
  res.send("Hello Mars");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

module.exports = app;
