import { Router } from "express";
import { getComments } from "../controllers/comment.controller";

const commentRouter = Router();

commentRouter.get("/commentlist", getComments);

export default commentRouter;
