const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

// Your middleware and routes here
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
});

module.exports = app;