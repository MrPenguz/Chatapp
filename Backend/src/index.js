import authRoutes from './routes/auth.route.js'
import dotenv from 'dotenv'
import {connectDB} from "./lib/db.js"
import express from 'express';
dotenv.config()
const app = express();
const PORT = process.env.PORT;
app.use(express.json())
app.use("/api/auth" , authRoutes)
app.listen(PORT,() => {
    console.log("server is running on PORT:" + PORT);
    connectDB()
})