import React from "react";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  //we did this because if the movies data didnt come it will still render
  if (!movies) return;
  const mainMovies = movies[0];
  console.log(mainMovies, "hgghgghjbjbjj");
  const { original_title, overview } = mainMovies;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;