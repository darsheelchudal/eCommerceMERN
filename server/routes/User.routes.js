import multer from "multer";
import express from "express";
import jwt from "jsonwebtoken";

import { User } from "../models/User.model.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post("/register", upload.single("profile_image"), async (req, res) => {
  const { fullName, email, password } = req.body;
  const { profile_image } = req.file.path;

  try {
    let user = User.findOne({ email });
    if (user) {
      return res.status("User already exists");
    }

    user = new User({
      profile_image,
      fullName,
      email,
      password,
    });

    await user.save();

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, "secret", { expiresIn: "1h" });

    res.json({ token });
  } catch (err) {
    console.log("Error", err);
    res.status(500).send("Server error");
  }
});

export default router;
