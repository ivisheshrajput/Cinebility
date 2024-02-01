import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTION
    );
    const popularList = await data.json();
    dispatch(addPopularMovies(popularList.results));
    console.log(popularList, "fwefewfwefwe");
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
