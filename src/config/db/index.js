const mongoose = require("mongoose");

async function connection() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/express");
    console.log("Database connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit with failure
  }
}

module.exports = { connection };
