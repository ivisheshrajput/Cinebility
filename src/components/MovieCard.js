import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-36 pr-4   ">
      <img
        src={POSTER_URL + movie.poster_path}
        alt="movie card"
        className="rounded-md"
      />
    </div>
  );
};

export default MovieCard;
