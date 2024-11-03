import React from "react";
import MovieCard from "./MovieCard";
import "../assets/css/MovieList";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list mt-">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
