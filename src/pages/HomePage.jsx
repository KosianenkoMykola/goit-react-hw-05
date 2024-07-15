import { useState, useEffect } from "react";
import {fetchTrendingMovies} from "../movies-api"
import MovieList from "../components/MovieList/MovieList"

export default function HomePage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
          try {
            const trendingMovies = await fetchTrendingMovies();
            setMovies(trendingMovies);
          } catch (error) 
          {
            console.error('Failed to fetch trending movies:', error);
        }
        }
        fetchMovies();
      }, []);

    return (
      <div>
        <h1>Trending today</h1>
        <MovieList movies={movies} />
      </div>
    );
  }