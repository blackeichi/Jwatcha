const API_KEY = "4bc5f53a3e7b9a35ef5fbd55f9f2b964";

const PopMovies = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=KR&page=1&region=KR`
  ).then((response) => response.json());
};
const TopMovies = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1&region=KR`
  ).then((response) => response.json());
};
const NowPlayingMovies = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`
  ).then((response) => response.json());
};
const UpcomingMovies = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());
};
const searchMovie = async ({ queryKey }) => {
  const [_, query] = queryKey;
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
  ).then((res) => res.json());
};
const detailMovie = async ({ queryKey }) => {
  const [_, id] = queryKey;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,images`
  ).then((res) => res.json());
};

export const moviesApi = {
  PopMovies,
  TopMovies,
  NowPlayingMovies,
  UpcomingMovies,
  searchMovie,
  detailMovie,
};

const latestTv = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1&region=KR`
  ).then((response) => response.json());
};
const onAirTv = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1&region=KR`
  ).then((response) => response.json());
};
const TopTv = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1&region=KR`
  ).then((response) => response.json());
};
const PopTv = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1&region=KR`
  ).then((response) => response.json());
};
const searchTv = async ({ queryKey }) => {
  const [_, query] = queryKey;
  return fetch(
    `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
  ).then((res) => res.json());
};
const detailTv = async ({ queryKey }) => {
  const [_, id] = queryKey;
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&append_to_response=videos,images`
  ).then((res) => res.json());
};
export const TvApi = { latestTv, PopTv, onAirTv, TopTv, searchTv, detailTv };
