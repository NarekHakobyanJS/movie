import React from 'react'
import './MovieCard.css'
import { NavLink } from 'react-router-dom'
import { imgUrl } from '../../api/api'

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
        <h3>{movie.title}</h3>
        <NavLink to={`/film/${movie.id}`}>
        <img src={imgUrl + movie.poster_path} />
        </NavLink>

    </div>
  )
}

export default MovieCard