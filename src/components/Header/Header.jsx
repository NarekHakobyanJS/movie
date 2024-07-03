import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.jpg'
import { useDispatch, useSelector } from 'react-redux'
import './Header.css'
import { GenresBTN } from './GenresBTN/GenresBTN'
import {changeText, fetchSearch} from '../../store/slices/movieSlice'
import { imgUrl } from '../../api/api'
import { NavLink } from 'react-router-dom'
export const Header = () => {

  const {genres} = useSelector((state) => state.genresData);
  const {searchText, search} = useSelector((state) => state.movieData);

  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  const changeTextForDispatch = (e) => {
    dispatch(changeText(e.target.value))
  }
  useEffect(() => {
    if(searchText.length > 3) {
      dispatch(fetchSearch(searchText))
      setIsOpen(true)
    }else {
      setIsOpen(false)
    }
  }, [searchText])

  const closeOpen = () => {
    setIsOpen(false)
    dispatch(changeText(''))
  }
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
            <input value={searchText} onChange={changeTextForDispatch}/>
            {
              isOpen && (<div className='search'>
                {
                  search.map((el) => {
                    return (
                      <div className='search-film'>
                        <h4>{el.title}</h4>
                        <NavLink to={`/film/${el.id}`} onClick={() => closeOpen()}>
                        <img src={imgUrl + el.poster_path} />
                        </NavLink>
                        
                      </div>
                    )
                  })
                }
              </div>)
            }
            
        </div>
    </header>
  )
}

