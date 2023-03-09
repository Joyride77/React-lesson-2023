import express from "express";
import admin from "./routes/admin.js";
import apiRouter from "./routes/api.js";
import cors from "cors";

const app = express();
const PORT = 8081;

app.use(express.json());
app.use(cors());

app.use("/admin", admin);
app.use("/api", apiRouter);

app.get("/", (request, response) => {
  response.send("<h1 style ='center; background-color: orange'>Day-69</h1>");
});

app.listen(PORT, () => {
  console.log(`Express App is running on http://localhost:${PORT}`);
});
