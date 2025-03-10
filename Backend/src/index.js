import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/Socket.js";
dotenv.config();

const PORT = process.env.PORT;
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});
