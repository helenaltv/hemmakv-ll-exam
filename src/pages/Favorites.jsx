import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import "../css/Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (imdbID) => {
    const updatedFavorites = favorites.filter(
      (movie) => movie.imdbID !== imdbID
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h1>Mina Favoriter</h1>
      <div className="favorite-list">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div key={movie.imdbID} className="favorite-item">
              <Link to={`/movies/${movie.imdbID}`}>
                <h3>
                  {movie.Title} ({movie.Year})
                </h3>
              </Link>
              <FaTrash
                className="trash-icon"
                onClick={() => removeFavorite(movie.imdbID)}
              />
            </div>
          ))
        ) : (
          <p>Inga favoriter ännu.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
