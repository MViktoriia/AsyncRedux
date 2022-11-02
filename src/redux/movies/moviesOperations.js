import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTrendMovie } from "services/movieAPI";


export const getMovies = createAsyncThunk("movies/getMovies", async (_, thunkApi) => {
    try {
        const res = await getTrendMovie();
        return res;
    } catch (e) {
        return thunkApi.rejectWithValue(e.message);
    }
});