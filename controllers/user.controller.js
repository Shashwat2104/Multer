// user.controller.js
const User = require("../models/user.model");

// Create a new user and save it to the database
const createUser = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    const { name, email } = req.body;
    const newUser = new User({
      name,
      email,
      file: req.file.filename, // Save filename to database
    });

    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Server error");
  }
};

module.exports = {
  createUser,
};
