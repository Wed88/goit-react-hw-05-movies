import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'a8510f925153cf4c34635b66e14d7318';

export const getPopularMovies = async () => {
  const response = await axios(`/trending/all/day?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieById = async movie_id => {
  const response = await axios(
    `/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieCast = async movie_id => {
  const response = await axios(
    `/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieReviews = async movie_id => {
  const response = await axios(
    `/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};
