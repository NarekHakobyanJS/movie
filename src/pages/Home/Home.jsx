import React, { useEffect, useMemo, useState } from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from '../../components/MovieCard/MovieCard'
import { changePage } from '../../store/slices/movieSlice'


const Home = () => {
  const [currentPageStyle, setCurentPageStyle] = useState(1)
  const { movies, total_results, pageSize } = useSelector((state) => state.movieData);
  const dispatch = useDispatch()
  let resultCount = Math.ceil(total_results / pageSize)
  let paginateBTN = []

  // let resutls = useMemo(() => {
  //   for (let i = 1; i <= resultCount; i++) {
  //     paginateBTN.push(i)
  //   }
  //   return paginateBTN.length
  // }, [paginateBTN])

  for (let i = 1; i <= 10; i++) {
        paginateBTN.push(i)
      }

  const goToSelectedPage = (page) => {
    setCurentPageStyle(page);
    dispatch(changePage(page))
  }

  return (
    <div className='home'>
      <div className='home-card'>
        {
          movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />
          })
        }
      </div>
      <div className='pagination'>
        {
          paginateBTN.map((page) => {
            return <button className={page === currentPageStyle ? 'active-page' : ''} onClick={() => goToSelectedPage(page)}>{page}</button>
          })
        }
      </div>
    </div>
  )
}

export default Home