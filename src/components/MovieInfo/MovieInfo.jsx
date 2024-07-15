import { getImageUrl } from "../../movies-api"
import css from "../MovieInfo/MovieInfo.module.css"

export default function MovieInfo ({movie}) {
    return (
        <div className={css.container}>
          <img src={getImageUrl(movie.poster_path)} alt={movie.title} className={css.img}/>
          <div>
            <h3>{movie.title}</h3>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Rating:</strong> {movie.vote_average}</p>
            <p><strong>Overview:</strong> {movie.overview}</p>
            <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
    )
}