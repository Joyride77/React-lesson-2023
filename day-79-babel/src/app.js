import express from "express";
import helloRouter from "./routes/api";
const app = express();

const PORT = 8080;

app.use(helloRouter);

app.get("/", (request, response) => {
  response.status(200).send("<h1>day-79 - Babel</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
