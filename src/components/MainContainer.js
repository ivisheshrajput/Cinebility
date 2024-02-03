import React from "react";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  //we did this because if the movies data didnt come it will still render
  if (!movies) return;
  // Check if movies data is available
  if (!movies) return null;

  // Generate a random index between 0 and 15
  const randomIndex = Math.floor(Math.random() * 16);

  // Access the movie using the random index
  const mainMovies = movies[randomIndex];

  const { original_title, overview, id } = mainMovies;
  return (
    mainMovies && (
      <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieID={id} />
      </div>
    )
  );
};

export default MainContainer;
