import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a8510f925153cf4c34635b66e14d7318';

export const getPopularMovies = async () => {
  const response = await axios(`trending/all/day?api_key=${API_KEY}`);
  return response.data;
};
