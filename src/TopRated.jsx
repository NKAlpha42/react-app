import React, { useState, useEffect } from "react";
import "./TopRated.css";
import MovieCard from "./MovieCard";

const TopRatedList = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=55bb0acb46a61016543cb0c61a9101ab"
    );
    ///change 'popular' to top rated, etc for diff organization

    const data = await response.json();

    // console.log(data);

    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  });

  return (
    <div className="popwrap">
      {movies.map((movie) => (
        // console.log(movie);
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default TopRated;
//https://api.themoviedb.org/3/movie/popular?api_key=55bb0acb46a61016543cb0c61a9101ab
