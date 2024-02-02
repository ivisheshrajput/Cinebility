import React from 'react'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
const SecondaryContainer = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    const movies=useSelector((store)=>store.movies)
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies} />

    </div>
  )
}

export default SecondaryContainer