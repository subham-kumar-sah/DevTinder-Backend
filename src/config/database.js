const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://subham007:ZfplT9C8G298g0XS@namastenode.pfmwhe2.mongodb.net/devTinder"
    );
  } catch (err) {
    console.error("Database connection error", err);
  }
};

module.exports = connectDB;
