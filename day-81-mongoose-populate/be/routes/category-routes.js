const express = require("express");
const categoryRouter = express.Router();
const Category = require("../models/Category");

categoryRouter.get("/list", async (req, res) => {
  const result = await Todo.find({});

  res.status(200).json({
    data: result,
  });
});

categoryRouter.post("/create", async (req, res) => {
  const body = req.body;

  const result = await Category.create(body);

  res.status(200).json({
    data: result,
  });
});

module.exports = categoryRouter;
