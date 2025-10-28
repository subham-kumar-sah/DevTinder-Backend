const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Middleware to handle all incoming requests for path "/"

app.use("/hello", (req, res) => {
  res.send("This is the hello page");
});

app.use("/test", (req, res) => {
  res.send("This is a test");
});

app.use("/", (req, res) => {
  res.send("Welcome to the homepage");
});
