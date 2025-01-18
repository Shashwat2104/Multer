// app.js
const express = require("express");
const connectDB = require("./config/db"); // Import DB connection
const userRouter = require("./routes/user.router");
// Import User routes

const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files (uploaded files)
app.use("/uploads", express.static("uploads"));

// Use the user router for user-related routes
app.use("/users", userRouter);

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
