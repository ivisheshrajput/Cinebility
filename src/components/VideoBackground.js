import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieID}) => {
  const trailerMovie=useSelector((store)=>store.movies?.movieTrailer)
  useMovieTrailer(movieID);
  return( <div className="w-screen">
    <iframe 
    className="w-screen h-[550px]  "
    src={"http://www.youtube.com/embed/"+trailerMovie?.key+"?&autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1"}
    title="Cinebility Video Player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    >
    
    </iframe></div>);
};

export default VideoBackground;