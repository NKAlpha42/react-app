import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard">
      <div className="row">
        <div className="column">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Movie Poster"
          />
        </div>

        <div className="column">
          <h3>{movie.title}</h3>
          <p>{movie.overview.slice(0, 550) + "..."}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
