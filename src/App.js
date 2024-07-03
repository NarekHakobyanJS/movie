import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Header} from './components/Header/Header';
import { fetchGenres } from './store/slices/movieGenreSlice';
import {fetchMovie} from './store/slices/movieSlice'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import { FilmPage } from './pages/FilmPage/FilmPage';
function App() {

  const dispatch = useDispatch()
  const {currentPage} = useSelector((state) => state.movieData)

  useEffect(() => {
    dispatch(fetchGenres())
    dispatch(fetchMovie(currentPage))
  }, [currentPage])
  return (
    <>
    <Header />
    <div className="App">
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/film/:id' element={<FilmPage /> }/>
      </Routes>
    </div>
    </>
  );
}

export default App;
