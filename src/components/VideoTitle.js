import React from "react";
import { FaPlay,FaInfoCircle } from 'react-icons/fa';
const VideoTitle = ({title, overview}) => {
  return (   <div className="pt-36 absolute px-12 w-screen h-[550px] bg-gradient-to-r from-black ">
    <h1 className="text-4xl font-semibold text-yellow-500">{title}</h1>
    <p className="w-4/12 text-sm pt-3 text-white"><i>{overview}</i></p>
    <div className="flex items-center space-x-4 pt-4">
      {/* Play button with play icon */}
      <button className="flex items-center bg-yellow-400  hover:opacity-100 p-2 px-4 rounded opacity-40 ">
        <FaPlay className="text-white" />
        <span className="text-white ml-2 ">Play</span>
      </button>
      
      {/* Info button */}
      <button className="flex items-center  bg-yellow-400  hover:opacity-100 p-2 px-4 rounded opacity-40  ">
      <FaInfoCircle className="text-white" />
        <span className="text-white ml-2">Info</span>
      </button>
    </div>
  </div>);
};

export default VideoTitle;
