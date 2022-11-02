import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "./moviesOperations";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        items: [],
        error: "",
        loading: false,
        genre: 0
    },
    reducers: {
        setGenre: (state, {payload}) => {state.genre = payload}
    },
    extraReducers: (builder) => {
    builder
      .addCase(getMovies.fulfilled, (state, {payload}) => {
          state.items = payload;
          state.loading = false;
      })
      .addCase(getMovies.rejected, (state, {payload}) => {
          state.error = payload;
          state.loading = false;

      })
        .addCase(getMovies.pending, (state, _) => {
            state.loading = true;
          state.error = "";
      })
        
    
  },

})

export const { setGenre } = movieSlice.actions;
export default movieSlice.reducer;