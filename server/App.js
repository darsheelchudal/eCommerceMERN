import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import userRouter from "./routes/User.routes.js";
//server
const app = express();
const PORT = 8000;
const MONGO_URI =
  "mongodb+srv://darsheelchudal11:darsheel@cluster0.i4rjtg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//Middlwares
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join("uploads")));

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to Mongoose");
  } catch (err) {
    console.log("Error", err);
  }
};
connectDB();

//Routes
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
