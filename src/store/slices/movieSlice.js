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

export const fethOneMive = createAsyncThunk(
    'fethOneMive',
    async (id) => {
        const resposne = await filmsAPI.getOneMovie(id)

        return resposne.data
    }
)

export const fetchSearch = createAsyncThunk(
    'fetchSearch',
    async(text) => {
        const response = await filmsAPI.getSarchMovie(text)

        return response.data.results
    }
)


export const fetchTrailer = createAsyncThunk(
    'fetchTrailer',
    async ({ movieId, iframe }) => {
        const res = await filmsAPI.getTrailer(movieId)
        // console.log(res);
        
        res.data.results.forEach((elm) => {
            if (elm.name === "Official Trailer") {
                iframe?.current?.setAttribute(
                    "src",
                    `https://www.youtube.com/embed/${elm.key}`
                );
            } else {
                iframe?.current?.setAttribute(
                    "src",
                    `https://www.youtube.com/embed/${elm.key}`
                );
            }
        })

    }
)



const movieSlice = createSlice({
    name : 'movieSlice',
    initialState : {
        searchText : '',
        movies : [],
        currentPage : 1,
        pageSize : 20,
        total_results : 0,
        movie : {},
        search : []

    },
    reducers : {
        changeTotalResults(state, action){
            state.total_results = action.payload
        },
        changePage(state, action){
            state.currentPage = action.payload
        },
        changeText(state, action){
            state.searchText = action.payload
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchMovie.fulfilled, (state, action) => {
            state.movies = action.payload
        })
        builder.addCase(fethOneMive.fulfilled, (state, action) => {
            state.movie = action.payload
        })
        builder.addCase(fetchSearch.fulfilled, (state, action) => {
            state.search = action.payload
        })
    }
})

export const {changeTotalResults, changePage, changeText} = movieSlice.actions
export default movieSlice.reducer