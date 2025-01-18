// user.router.js
const express = require("express");
const router = express.Router();
const upload = require("../utils/multer"); // Import Multer middleware
const { createUser } = require("../controllers/user.controller"); // Import User controller

// Route to handle single user creation with file upload
router.post("/create", upload.single("file"), createUser);

// Other user-related routes can be added here

module.exports = router;
