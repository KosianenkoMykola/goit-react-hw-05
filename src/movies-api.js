import axios from 'axios';

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjY2MjU0ZDc5MTFmMzY4ODc1ZDA0NjcyNGRiMWI5NiIsIm5iZiI6MTcyMDcwMjQwOC4wNTM3NTksInN1YiI6IjY2OGZkM2Y1MDY1NjUzODVmMzM0OWExZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d1vsy-oKWKVzNiR-rWMlAi9L_NqKkJlkNXPqfPoi4xo';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const options = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
    return response.data.results;
  } catch (err) {
    console.error('Error fetching trending movies:', err);
    throw err;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
    return response.data.results;
  } catch (err) {
    console.error('Error searching movies:', err);
    throw err;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, options);
    return response.data;
  } catch (err) {
    console.error('Error fetching movie details:', err);
    throw err;
  }
};

export const fetchMovieCredits = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, options);
    return response.data.cast;
  } catch (err) {
    console.error('Error fetching movie credits:', err);
    throw err;
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, options);
    return response.data.results;
  } catch (err) {
    console.error('Error fetching movie reviews:', err);
    throw err;
  }
};

export const getImageUrl = (path) => {
  return `${IMG_BASE_URL}${path}`;
};
