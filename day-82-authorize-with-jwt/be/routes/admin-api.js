const express = require("express");
const Users = require("../models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const adminApi = express.Router();
const UserRole = require("../models/UserRole");

adminApi.post("/register", async (req, res) => {
  const data = req.body;

  if (data) {
    const oldUser = await Users.findOne({ email: data.email });

    if (oldUser) {
      return res.status(400).json({
        success: false,
        error: "User already exists",
      });
    }

    var hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;

    try {
      const user = await Users.create(data);
      const result = await user.populate("userrole");
      res.status(201).json({
        message: "Successfully created",
        email: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error,
      });
    }

    // Users.create({ data })
    //   .then((data) => {
    //     res.status(201).json({
    //       message: "Successfully created",
    //       email: data.email,
    //     });
    //     return;
    //   })
    //   .catch((error) => {
    //     res.status(500).json({
    //       success: false,
    //       error,
    //     });
    //   });
  } else {
    return res.json({
      error: "The input field is empty",
    });
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

adminApi.post("/role/create", async (req, res) => {
  const { name } = req.body;
  const result = await UserRole.create({ name });
  res.status(200).json({
    data: result,
  });
});

adminApi.get("/role/list", async (req, res) => {
  const result = await UserRole.find({});
  res.status(200).json({
    data: result,
  });
});

module.exports = adminApi;
