import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "your_api_key"; // OMDb API or themoviedb API key
const BASE_URL = "https://www.omdbapi.com/"; // or themoviedb URL

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (title, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}?s=${title}&apikey=${API_KEY}`
      );
      return response.data.Search; // Assuming OMDb API's Search response
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch movies");
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default moviesSlice.reducer;
