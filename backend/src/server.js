import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// Import routes
import chatbotRoutes from "./routes/chatbotRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config(); // Load .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend's origin
    credentials: true, // allow cookies / auth headers
  })
);
app.use(express.json()); // Body parser

// Routes
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/auth", authRoutes);

// Root route (optional)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });
