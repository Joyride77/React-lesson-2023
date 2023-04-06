import { Request, Response } from "express";
import movieModel from "../models/movies.model";

export const getMovies = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 0;
  const moviesPerPage: number = Number(req.query.moviesPerPage) || 30;
  try {
    const movies = await movieModel
      .find({})
      .limit(moviesPerPage)
      .skip(moviesPerPage * page)
      .sort({ year: -1 });
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};
