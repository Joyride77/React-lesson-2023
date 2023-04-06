import mongoose, { Date, Schema } from "mongoose";

interface IComment {
  name: string;
  email: string;
  movie_id: {
    type: mongoose.Schema.Types.ObjectId;
    ref: "Movie";
  };
  text: string;
  date: Date;
}

const CommentSchema: Schema = new Schema({});

export default mongoose.model<IComment>("Comments", CommentSchema);
