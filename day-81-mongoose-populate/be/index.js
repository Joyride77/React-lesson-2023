const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRouter = require("./routes/todo-routes");
const categoryRouter = require("./routes/category-routes");

const app = express();
const PORT = 8080;
const MONGO_CONNECTION_STRING =
  "mongodb+srv://Joyride:google@joyride.qzidazn.mongodb.net/test";

app.use(express.json());
app.use(cors());
app.use("/todo", todoRouter);
app.use("/category", categoryRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello day-81 Insert/Update/Delete Many</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Server is running on http://localhost:${PORT}`);
});
