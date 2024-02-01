import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTION } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",

      // https://api.themoviedb.org/3/movie/popular
      // https://api.themoviedb.org/3/movie/top_rated
      // https://api.themoviedb.org/3/movie/upcoming
      API_OPTION
    );
    const nowPlayingList = await data.json();
    console.log(nowPlayingList.results);
    dispatch(addNowPlayingMovies(nowPlayingList.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;