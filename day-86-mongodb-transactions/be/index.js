const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const transactionApi = require("./routes/transaction-route");
const productApi = require("./routes/product-route");

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/transaction", transactionApi);
app.use("/product", productApi);

app.get("/", (req, res) => {
  res.send("<h1>Day 86 MongoDB Transaction</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Server is running on http://localhost:${PORT}`);
});
