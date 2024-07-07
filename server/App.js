import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 8000;
const MONGO_URI =
  "mongodb+srv://darsheelchudal11:darsheel@cluster0.i4rjtg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const db = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to Mongoose");
  } catch (err) {
    console.log("Error", err);
  }
};
db();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
