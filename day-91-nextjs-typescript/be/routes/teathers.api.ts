import { Router } from "express";
import {
  getTheaters,
  getTheaterById,
  searchTheaters,
} from "../controllers/theater.controller";

const theaterRouter = Router();

theaterRouter.get("/list", getTheaters);

theaterRouter.get("/search", searchTheaters);

theaterRouter.get("/byId/:id", getTheaterById);

export default theaterRouter;
