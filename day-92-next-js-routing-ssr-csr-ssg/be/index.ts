import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import theaterRouter from "./routes/teathers.api";
import movieRouter from "./routes/movies.api";
import commentRouter from "./routes/comments.api";
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING ||
  "mongodb+srv://Joyride:google@joyride.qzidazn.mongodb.net/sample_mflix";

app.use(cors());
app.use(express.json());

let name: string = "<h1>Day 92 Next JS routing SSR, CSR, SSG</h1>";

app.get("/", (req: Request, res: Response) => {
  res.send(name);
});

app.use("/theaters", theaterRouter);
app.use("/movies", movieRouter);
app.use("/comments", commentRouter);

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Server is running on http://localhost:${PORT}`);
});
