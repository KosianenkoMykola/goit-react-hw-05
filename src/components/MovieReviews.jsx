import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../movies-api";

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getReviews = async () => {
            try {
                const reviewsData = await fetchMovieReviews(movieId);
                setReviews(reviewsData);
            } catch (error) {
                console.error('Failed to fetch reviews:', error);
            }
        };

        getReviews();
    }, [movieId]);

    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews.length === 0 ? (
                    <p>No reviews available for this movie.</p>
                ) : (
                    reviews.map((review) => (
                        <li key={review.id}>
                            <h4>{review.author}</h4>
                            <p>{review.content}</p>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}
