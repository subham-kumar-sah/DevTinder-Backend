const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
  res.send("All User Data from Admin Route");
});

app.get("/admin/deleteAllData", (req, res) => {
  res.send("All User Data Deleted from Admin Route");
});

app.post("/user/logIn", (req, res) => {
  console.log("User LogIn Route Accessed");
  res.send("User logged in successfully");
});

app.get("/user/getData", userAuth, (req, res) => {
  res.send("User Route Accessed");
});

// Middleware to handle all incoming requests for path "/user" with multiple request handlers

// app.use(
//   "/user",
//   (req, res, next) => {
//     //Route Handling Logic
//     //res.send("This is First callback for /user route");
//     console.log("First callback for /user route");
//     next();
//   },
//   (req, res, next) => {
//     //res.send("This is Second callback for /user route");
//     console.log("Second callback for /user route");
//     next();
//   },
//   (req, res, next) => {
//     //res.send("This is Third callback for /user route");
//     console.log("Third callback for /user route");
//     next();
//   },
//   (req, res, next) => {
//     res.send("This is Fourth callback for /user route");
//     console.log("Fourth callback for /user route");
//     //next();
//   }
// );

//-----------------------------------------------------------------

// Middleware to handle all incoming requests for path "/user"

// app.use("/user", (req, res) => {
//   res.send("This is User route middleware");
// });

// app.get("/user", (req, res) => {
//   res.send("This is GET User route");
// });

// app.post("/user", (req, res) => {
//   res.send("This is POST User route");
// });

// app.delete("/user", (req, res) => {
//   res.send("This is DELETE User route");
// });

//-----------------------------------------------------------------

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

//-----------------------------------------------------------------

//Reading the query parameters
// app.get("/user", (req, res) => {
//   console.log(req.query);
//   res.send("This is GET User route");
// });

//Reading the route parameters(Dynamic URL segments)
// app.get("/user/:userId/:name", (req, res) => {
//   const { name } = req.params;
//   console.log(name);
//   res.send(`This is GET User route`);
// });
