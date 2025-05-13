import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./configs/db.js";
import propertyRouter from "./routes/property.js";

dotenv.config();

// Initialize express app
const app = express();

app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Basic Route
app.get("/", (req, res) => res.send("API is running..."));

// API routes
app.use("/api", propertyRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
