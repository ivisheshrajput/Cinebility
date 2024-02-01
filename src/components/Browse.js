import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
