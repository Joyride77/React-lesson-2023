import { Router } from "express";
import { getMovieById, getMovies } from "../controllers/movie.controller";

const movieRouter = Router();

movieRouter.get("/movielist", getMovies);

movieRouter.get("/byId/:id", getMovieById);

export default movieRouter;
