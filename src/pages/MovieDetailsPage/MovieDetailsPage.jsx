import { Suspense, useEffect, useRef, useState } from "react";
import {
  NavLink,
  useParams,
  Outlet,
  useLocation,
  Link,
} from "react-router-dom";
import { fetchMovieDetails } from "../../movies-api";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import css from "../MovieDetailsPage/MovieDetailsPage.module.css"

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/movies");

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [movieId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Link to={backLinkRef.current} className={css.backBtn}>Go back</Link>
      {movie && <MovieInfo movie={movie} />}
      <ul className={css.navLink}>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Suspense fallback={<div>Loading child route component...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
