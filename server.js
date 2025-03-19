

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allow frontend domain
app.use(cors({
  origin: "https://zenforce.vercel.app",     // Your frontend domain
  credentials: true                          // Allow cookies
}));

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
