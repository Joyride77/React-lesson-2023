const express = require("express");
const Todo = require("../models/Todo");
const todoRouter = express.Router();

todoRouter.get("/list", async (req, res) => {
  const result = await Todo.find({}).populate("category");

  res.status(200).json({
    data: result,
  });
});

todoRouter.post("/create", async (req, res) => {
  const body = req.body;

  const result = await Todo.insertMany(body);

  res.status(200).json({
    data: result,
  });
});

todoRouter.put("/update", async (req, res) => {
  const body = req.body;
  console.log(body);
  const result = await Todo.updateMany(
    { name: body[1].name },
    { $set: { checked: body[0].checked } }
  );

  res.status(200).json({
    data: result,
  });
});

todoRouter.delete("/delete", async (req, res) => {
  const body = req.body;
  const result = await Todo.deleteMany(body);
  res.status(200).json({
    data: result,
  });
});

module.exports = todoRouter;
