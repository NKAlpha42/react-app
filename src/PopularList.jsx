import React, { useState, useEffect } from "react";
import "./PopularList.css";
import MovieCard from "./MovieCard";

const PopularList = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=59a23e70a835d18e0ef958c2f3194303"
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

export default PopularList;
//https://api.themoviedb.org/3/movie/popular?api_key=55bb0acb46a61016543cb0c61a9101ab
