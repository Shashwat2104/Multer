// multer.config.js
const multer = require("multer");
const path = require("path");

// Set up Multer storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder where files are saved
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Use timestamp for unique filenames
  },
});

// Create an upload middleware with the storage configuration
const upload = multer({ storage: storage });

module.exports = upload;
