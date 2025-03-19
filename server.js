

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
// import userModel from "./models/userModel";
import connectDB from "./config/mongodb.js";
import uerRouter from "./Routes/userRoutes.js";
import authRouter from "./Routes/authroutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

const allowedOrigins = ["https://zenforce.vercel.app"]; // Removed trailing slash
app.use(cors({
  origin: allowedOrigins,
  credentials: true, // Enable cookies/auth headers
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: false, // Ensure preflight requests are properly handled
  optionsSuccessStatus: 204
}));
  

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Backend is running...");
});




app.use("/api/auth", authRouter);
// app.use("/api/user", uerRouter);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
