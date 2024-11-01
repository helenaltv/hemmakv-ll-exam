import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FavoriteButton from "../components/FavoriteButton";
import "../css/MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = "32552934"; // Your API key

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
        );
        setMovie(response.data);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError("Could not fetch movie details."); // Set error message to state
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <div className="movie-container">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "placeholder-image-url"}
          alt={movie.Title}
          className="movie-poster"
        />
        <div className="movie-info">
          <h1>{movie.Title}</h1>
          <p>
            <strong>Year:</strong> {movie.Year}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <FavoriteButton movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
