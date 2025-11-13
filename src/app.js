const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

//Middleware for coverting data into json
app.use(express.json());

app.post("/signUp", async (req, res) => {
  // Sign up logic here
  try {
    //Creating Instance of User model
    const user = new User(req.body);
    //Saving user to database as user.save() returns a promise so we use await
    await user.save();
    res.send("User signed up");
  } catch (err) {
    res.status(400).send("Error signing up user:" + err.message);
  }
});

app.get("/user", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user.length !== 0) res.send(user);
    else res.status(400).send("User not found");
  } catch (err) {
    res.status(400).send("User Not Found");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Users not found");
  }
});

connectDB()
  .then(async () => {
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
