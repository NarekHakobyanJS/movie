import React, { useEffect, useRef } from 'react'
import './FilmPage.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fethOneMive, fetchTrailer } from '../../store/slices/movieSlice';
import { imgUrl } from '../../api/api';

export const FilmPage = () => {
    const iframe = useRef()
    const { id } = useParams();
    useEffect(() => {
        document.body.style.backgroundImage = `url(${imgUrl + movie.backdrop_path})`
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center'
    }, [id])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fethOneMive(id))
    }, [id])

    useEffect(() => {
        dispatch(fetchTrailer({movieId : id, iframe : iframe}))
    }, [])

    const {movie} = useSelector((state) => state.movieData)

    return (
        <div className='film-page'>
            <div>
                <img src={imgUrl + movie.poster_path} />
                <h2>{movie.title}</h2>
            </div>
            <div>
                <iframe ref={iframe}/>
            </div>
        </div>
    )
}