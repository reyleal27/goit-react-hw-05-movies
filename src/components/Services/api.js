import axios from 'axios';
import Notiflix from 'notiflix';


const API_KEY = 'a1f9c2353e804507e52dbc087211be65';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
    api_key: API_KEY,
};

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get('trending/movie/week');
    return response.data.results;
  } catch (error) {
    Notiflix.Notify.failure(`${error}`, {
      position: 'center-top',
    });
  }
};

export const getSearchMovies = async (query, page) => {
//   const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
  const response = await axios.get(`search/movie?query=${query}&page=${page}`);
  return response.data.results;
};

export const getMovieCast = async (movieId) => {
    // const url = `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    const response = await axios.get(`movie/${movieId}/credits`);
    return response.data.cast;
}

export const getMovieDetails = async (movieId) => {
    // const url = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`;
    const response = await axios.get(`movie/${movieId}`);
    return response.data;
}

export const getMovieReviews = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/reviews`);
    return response.data.results;
}