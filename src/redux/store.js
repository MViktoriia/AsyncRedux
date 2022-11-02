import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/moviesSlice";

const store = configureStore({
    reducer: {
        movies: movieReducer
    }
});

export default store;