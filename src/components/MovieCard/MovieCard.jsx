import React from 'react'
import './MovieCard.css'


const imgUrl = "https://image.tmdb.org/t/p/w500/"

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
        <h3>{movie.title}</h3>
        <img src={imgUrl + movie.poster_path} />
    </div>
  )
}

export default MovieCard