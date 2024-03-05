import dotenv from "dotenv";
dotenv.config();

import express, { json, urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connect } from "mongoose";
import books from "./routes/Book.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(json({ limit: "50mb" }))
  .use(urlencoded({ limit: "50mb", extended: false }))
  .use(cookieParser());

const connectDB = async () => {
  try {
    await connect(process.env.MONGODB_URI + process.env.DATABASE_NAME);
  } catch (err) {
    console.error("Error connecting to database: ", err);
    throw new Error("Database connection error");
  }
};

(async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT);
    console.log("Listening...");
  } catch (err) {
    console.error("Error starting server:", err);
  }
})();

app.use('/books', books)



app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).json({ response: "Something went wrong!" });
});