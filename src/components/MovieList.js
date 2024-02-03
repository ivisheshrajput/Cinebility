import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4">
      <h1 className="text-2xl text-white py-5 font-semibold">{title}</h1>
      <div className="flex overflow-x-scroll">
        {" "}
        <div className="flex ">
          {movies &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
