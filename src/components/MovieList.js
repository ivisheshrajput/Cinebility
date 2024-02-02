import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div>
        <div>{title}</div>
        <MovieCard movies={movies} />
    </div>
  )
}

export default MovieList