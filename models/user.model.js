// user.model.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  file: {
    type: String, // Store the file path or file name
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
