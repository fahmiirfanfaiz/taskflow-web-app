require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const connectDB = require("./configs/db");
const mongoose = require("mongoose");

process.env.TZ = "Asia/Jakarta";

process.on("SIGINT", async () => {
  try {
    await mongoose.connection.close();
    console.log("🔌 MongoDB connection closed due to app termination");
  } catch (err) {
    console.error("❌ Error closing MongoDB connection:", err);
  }
  process.exit(0);
});

(async () => {
  const dbConnected = await connectDB();
  if (!dbConnected) {
    console.error("❌ Server not started due to database connection failure");
    process.exit(1);
  }
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})();
