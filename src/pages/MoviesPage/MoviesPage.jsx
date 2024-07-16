import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import css from "../MoviesPage/MoviesPage.module.css"

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState(location.state?.query || '');
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get('query') ?? '';

    useEffect(() => {
        if (searchQuery) {
            searchMovies(searchQuery).then(setMovies);
        }
    }, [searchQuery]);

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ query });
    };

    return (
        <div>
            <h1>Search Movies</h1>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={handleSearchChange}
                    placeholder="Search movies..."
                    className={css.input}
                />
                <button type="submit" className={css.btn}>Search</button>
            </form>
            <MovieList movies={movies} />
        </div>
    );
}
