const mongoose = require("mongoose");

// Getting Schema and model from mongoose by destructuring
const { Schema, model } = mongoose;

// Creating a user schema by defining types and constraints
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: false },
});

const User = model("User", userSchema);

module.exports = User;
