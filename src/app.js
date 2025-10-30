const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// app.use("/user", (req, res) => {
//   res.send("This is User route middleware");
// });

app.get("/user", (req, res) => {
  res.send("This is GET User route");
});

app.post("/user", (req, res) => {
  res.send("This is POST User route");
});

app.delete("/user", (req, res) => {
  res.send("This is DELETE User route");
});

// Middleware to handle all incoming requests for path "/"

// app.use("/hello", (req, res) => {
//   res.send("This is the hello page");
// });

// app.use("/test", (req, res) => {
//   res.send("This is a test");
// });

// app.use("/", (req, res) => {
//   res.send("Welcome to the homepage");
// });
