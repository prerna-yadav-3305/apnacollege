require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
console.log("Current directory:", __dirname);
const collegeRoutes = require("./src/routes/collegeRoutes");


// ✅ ADD THIS LINE to fix the error

// Middleware
app.use(cors({ origin: ["http://localhost:4000"], credentials: true }));
app.use(express.json());

// Routes
app.use("/colleges", collegeRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("✅ Backend is working!");
});

// Connect to MongoDB and start server
mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
