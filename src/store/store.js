import { configureStore } from "@reduxjs/toolkit";
import movieGenreSlice from "./slices/movieGenreSlice";
import movieSlice from "./slices/movieSlice";

export const store = configureStore({
    reducer : {
        genresData : movieGenreSlice,
        movieData : movieSlice
    }
})