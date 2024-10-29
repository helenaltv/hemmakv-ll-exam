import React, { useState } from "react";
import axios from "axios";
import "../css/Home.css"; // Se till att du har CSS-filen kopplad
import { Link } from "react-router-dom"; // För att länka till filmdetaljer

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=32552934`
      );
      if (response.data.Response === "False") {
        throw new Error(response.data.Error);
      }
      setMovies(response.data.Search);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies();
  };

  return (
    <div className="home-container">
      <h1>Search for Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="movie-list">
        {movies &&
          movies.map((movie) => (
            <div key={movie.imdbID} className="movie-item">
              <Link to={`/movies/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} />
                <h2>{movie.Title}</h2>
                <p>{movie.Year}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
