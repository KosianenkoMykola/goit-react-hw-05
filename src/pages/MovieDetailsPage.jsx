import { Suspense, useEffect, useRef, useState } from "react";
import {
    NavLink,
    useParams,
    Outlet,
    useLocation,
    Link,
  } from "react-router-dom";
  import { fetchMovieDetails } from "../movies-api";

export default function MovieDetailsPage() {
    const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return null;

  const { title, poster_path, release_date, vote_average, overview, genres } = movie;

  return (
    <div>
      <Link to="/movies">Go back</Link>
      <div>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            
          />
        )}
        <div>
          <h2>{title} ({new Date(release_date).getFullYear()})</h2>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li><Link to="cast">Cast</Link></li>
          <li><Link to="reviews">Reviews</Link></li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}