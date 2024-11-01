import React, { useState, useEffect } from "react";
import "../css/FavoriteButton.css";
const FavoriteButton = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favorites.find((fav) => fav.imdbID === movie.imdbID);
    if (exists) setIsFavorite(true);
  }, [movie]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favorites.find((fav) => fav.imdbID === movie.imdbID);

    if (exists) {
      // Ta bort från favoriter
      const updatedFavorites = favorites.filter(
        (fav) => fav.imdbID !== movie.imdbID
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // Lägga till i favoriter
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return (
    <button
      className={`favorite-button ${isFavorite ? "favorite" : ""}`}
      onClick={toggleFavorite}
    >
      {isFavorite ? "Ta bort från favoriter" : "Lägg till i favoriter"}
    </button>
  );
};

export default FavoriteButton;
