import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { filmsAPI } from '../../api/api'


export const fetchMovie = createAsyncThunk(
    'fetchMovie',
    async (currentPage, {dispatch}) => {
        const response = await filmsAPI.getMoviesByPage(currentPage)
        dispatch(changeTotalResults(response.data.total_results));
        return response.data.results
    }
)
const movieSlice = createSlice({
    name : 'movieSlice',
    initialState : {
        movies : [],
        currentPage : 1,
        pageSize : 20,
        total_results : 0

    },
    reducers : {
        changeTotalResults(state, action){
            state.total_results = action.payload
        },
        changePage(state, action){
            state.currentPage = action.payload
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchMovie.fulfilled, (state, action) => {
            state.movies = action.payload
        })
    }
})

export const {changeTotalResults, changePage} = movieSlice.actions
export default movieSlice.reducer