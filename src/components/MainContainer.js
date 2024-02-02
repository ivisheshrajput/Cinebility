import React from "react";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  //we did this because if the movies data didnt come it will still render
  if (!movies) return;
  const mainMovies = movies[0];
  const { original_title, overview, id } = mainMovies;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieID={id}/>
    </div>
  );
};

export default MainContainer;
