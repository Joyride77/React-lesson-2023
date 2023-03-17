import express from "express";

const helloRouter = express.Router();

helloRouter.get("/hello", (req, res) => {
  res.status(200).json({
    data: "Hello",
  });
});

export default helloRouter;
