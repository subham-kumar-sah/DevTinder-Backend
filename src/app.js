const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signUp", async (req, res) => {
  // Sign up logic here
  const userData = {
    firstName: "Subham",
    lastName: "Sah",
    email: "subham.sah@gmail.com",
    password: "securepassword",
    age: 29,
  };
  //Creating instance of User model
  try {
    //Creating Instance of User model
    const user = new User(userData);
    //Saving user to database as user.save() returns a promise we use await
    await user.save();
    res.send("User signed up");
  } catch (err) {
    res.status(400).send("Error signing up user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error(
      "Failed to start server due to database connection error",
      err
    );
  });
