const express = require("express");
const api = express.Router();
const auth = require("../middleware/auth");

api.post("/protected", auth, (req, res, next) => {
  res.status(200).json({
    data: "Successfully got the protected route",
  });
});

api.post("/unprotected", (req, res) => {
  res.status(200).json({
    data: "Successfully got the unprotected route",
  });
});

module.exports = api;
