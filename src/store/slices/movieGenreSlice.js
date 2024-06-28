import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filmsAPI } from "../../api/api";

export const fetchGenres = createAsyncThunk(
    'fetchGenres',
    async () => {
        const response = await filmsAPI.getGenres();
        // console.log(response);
        return response.data.genres
    }
)
const movieGenresSlice = createSlice({
    name: 'movieGenresSlice',
    initialState: {
        genres: []
    },
    reducers: {

    },
    extraReducers : (builder) => {
        builder.addCase(fetchGenres.pending, (state, action) => {
            return state
        })
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            state.genres = action.payload
        })
    }
})

export default movieGenresSlice.reducer