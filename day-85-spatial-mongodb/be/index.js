const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const restaurantApi = require("./routes/restaurants.routes");
const neighborhoodApi = require("./routes/neighborhood.routes");

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/restaurant", restaurantApi);
app.use("/neighborhood", neighborhoodApi);

app.get("/", (req, res) => {
  res.send("<h1>Hello day-85</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Server is running on http://localhost:${PORT}`);
});
