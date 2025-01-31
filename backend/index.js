import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/conn.js";
import authRoute from "./Routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(PORT, () => {
  connectDB();
  console.log("Server is Running at " + PORT);
});
