import React from 'react'
import logo from '../../assets/logo.jpg'
import { useSelector } from 'react-redux'
import './Header.css'
import { GenresBTN } from './GenresBTN/GenresBTN'

export const Header = () => {
  const {genres} = useSelector((state) => state.genresData)
  return (
    <header>
        <div className='logo-block'>
            <img src={logo} alt='logo'/>
        </div>
        <nav>
            {
              genres.map((genre) => {
                return <GenresBTN key={genre.id} genre={genre}/>
              })
            }
        </nav>
        <div className='search-block'>
            <input />
        </div>
    </header>
  )
}

