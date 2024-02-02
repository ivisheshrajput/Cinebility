import React, { useEffect } from 'react'
import { addMovieTrailer } from '../utils/moviesSlice';
import { API_OPTION } from '../utils/constants';
import { useDispatch } from 'react-redux';

const useMovieTrailer = (movieID) => {
    const dispatch=useDispatch();
    const getMovieVideos=async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieID+"/videos?language=en-US",API_OPTION);
        const json = await data.json();
      const filterData=json.results.filter((video)=>video.type==="Trailer");
      const trailer=filterData.length?filterData[0]:json.results[0]
      dispatch(addMovieTrailer(trailer))
      
      }
      useEffect(()=>{
        getMovieVideos();
      },[])
}

export default useMovieTrailer