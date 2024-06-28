import { configureStore } from "@reduxjs/toolkit";
import movieGenreSlice from "./slices/movieGenreSlice";

export const store = configureStore({
    reducer : {
        genresData : movieGenreSlice
    }
})