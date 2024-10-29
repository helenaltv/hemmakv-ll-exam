import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/slices/favoritesSlice";
import "../css/MovieCard.css";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavorite(movie));
  };

  return (
    <div className="movie-card">
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <Link to={`/movies/${movie.imdbID}`}>Details</Link>
      <button onClick={handleAddFavorite}>Add to Favorites</button>
    </div>
  );
};

export default MovieCard;
