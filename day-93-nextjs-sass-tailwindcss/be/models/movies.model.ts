import mongoose, { Date, Schema } from "mongoose";

interface IAwards {
  wins: Number;
  nominations: Number;
  text: string;
}

interface IImdb {
  rating: Number;
  votes: Number;
  id: Number;
}

interface IViewer {
  rating: Number;
  numReviews: Number;
  meter: Number;
}

interface ITomatoes {
  viewer: IViewer;
  production: string;
  lastUpdated: Date;
}

interface IMovie {
  plot: string;
  genres: [string];
  runtime: Number;
  rated: string;
  cast: [string];
  num_mflix_comments: Number;
  poster: string;
  title: string;
  fullplot: string;
  languages: [string];
  released: Date;
  directors: [string];
  writers: [string];
  awards: IAwards;
  lastupdated: Date;
  year: Date;
  imdb: IImdb;
  type: {
    type: string;
    enum: ["movie"];
    required: true;
  };
  tomatoes: ITomatoes;
}

const MoviewSchema: Schema = new Schema({});

export default mongoose.model<IMovie>("Movie", MoviewSchema);
