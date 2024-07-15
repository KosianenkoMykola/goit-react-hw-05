import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../movies-api";

export default function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const getCast = async () => {
            try {
                const castData = await fetchMovieCast(movieId);
                setCast(castData);
            } catch (error) {
                console.error('Failed to fetch cast:', error);
            }
        };

        getCast();
    }, [movieId]);

    return (
        <div>
            <h2>Cast</h2>
            <ul>
                {cast.map((actor) => (
                    <li key={actor.cast_id}>{actor.name} as {actor.character}</li>
                ))}
            </ul>
        </div>
    );
}
