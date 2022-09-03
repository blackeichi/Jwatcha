const API_KEY = "4bc5f53a3e7b9a35ef5fbd55f9f2b964";

const PopMovies = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=KR&page=1`
  ).then((response) => response.json());
};
const TopMovies = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=KR&page=1`
  ).then((response) => response.json());
};

export const moviesApi = { PopMovies, TopMovies };
