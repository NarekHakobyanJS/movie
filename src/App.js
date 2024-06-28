import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Header} from './components/Header/Header';

import './App.css';
import { fetchGenres } from './store/slices/movieGenreSlice';
import { Loding } from './components/Loding/Loding';
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGenres())
  }, [])
  return (
    <>
    <Header />
    <div className="App">
      <Loding size='size-1'/>
    </div>
    </>
  );
}

export default App;
