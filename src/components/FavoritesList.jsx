import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../redux/slices/favoritesSlice";
import "../css/FavoritesList.css";

const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites.favoriteMovies);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (id) => {
    dispatch(removeFavorite(id));
  };

  return (
    <div className="favorites-list">
      <h2>Your Favorites</h2>
      {favorites.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <button onClick={() => handleRemoveFavorite(movie.imdbID)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
