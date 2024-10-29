import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoriteMovies: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteMovies.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.imdbID !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
