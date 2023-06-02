// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/hello-mars", (req, res) => {
  res.send("Hello Mars");
});

module.exports = app;
