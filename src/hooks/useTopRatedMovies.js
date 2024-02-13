import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  //wrote this for memoization
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTION
    );
    const topRatedList = await data.json();
    dispatch(addTopRatedMovies(topRatedList.results));
  };

  useEffect(() => {
    //wrote this for memoization
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
