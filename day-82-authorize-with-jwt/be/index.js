const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const adminApi = require("./routes/admin-api");
const api = require("./routes/api");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

app.use(express.json());
app.use(cors());
app.use("/admin", adminApi);
app.use("/api", api);

app.get("/", (req, res) => {
  res.send("<h1>Hello day-82</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Server is running on http://localhost:${PORT}`);
});
