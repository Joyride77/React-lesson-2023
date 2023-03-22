const express = require("express");
const Users = require("../models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const adminApi = express.Router();

adminApi.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const oldUser = await Users.findOne({ email: email });

    if (oldUser) {
      res.status(500).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    Users.create({ email: email, password: hashedPassword })
      .then((data) => {
        res.status(201).json({
          message: "Successfully created",
          email: data.email,
        });
        return;
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          error,
        });
      });
  } else {
    return res.status(500).json({ error: "Input field is empty" });
  }
});

adminApi.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).json({ error: "Input is wrong" });
      return;
    }

    const user = await Users.findOne({ email: email });

    if (user) {
      const isMatch = await bcrypt.compare(password, user?.password);
      if (user && isMatch) {
        const jwtBody = {
          user_id: user._id,
          email: email,
        };
        const token = jwt.sign(jwtBody, "MyPrivateKey", { expiresIn: "24h" });

        res.status(200).json({ success: true, token: token });
        return;
      } else {
        return res
          .status(400)
          .json({ success: false, status: "Email or password is wrong" });
      }
    }
  } catch (error) {
    res.status(500).json({
      data: "Error",
      error: error,
    });
  }
});

module.exports = adminApi;
