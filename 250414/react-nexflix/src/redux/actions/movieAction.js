// const getMovies = () => {
//   return async (dispatch) => {
//     const url1 =
//       "https://api.themoviedb.org/3/movie/now_playing?api_key=0bc8bd2db453d7413d1c2844ec617b61&language=ko-KR&page=1";
//     const response1 = await fetch(url1);
//     const data1 = await response1.json();
//     dispatch({ type: "nowPlaying", payload: data1 });

//     const url2 =
//       "https://api.themoviedb.org/3/movie/popular?api_key=0bc8bd2db453d7413d1c2844ec617b61&language=ko-KR&page=1";
//     const response2 = await fetch(url2);
//     const data2 = await response2.json();
//     dispatch({ type: "nowPlaying", payload: data2 });

//     const url3 =
//       "https://api.themoviedb.org/3/movie/upcoming?api_key=0bc8bd2db453d7413d1c2844ec617b61&language=ko-KR&page=1";
//     const response3 = await fetch(url3);
//     const data3 = await response3.json();
//     dispatch({ type: "nowPlaying", payload: data3 });
//   };
// };

// export const movies = { getMovies };

import api from "../api";

const API_KEY = import.meta.env.VITE_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_MOVIES_REQUEST",
        loading: true,
      });

      const nowPlayingMovieApi = api.get(
        `movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`
      );

      const topRatedMovieApi = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
      );

      const upComingMovieApi = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
      );

      const genresMovieApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=ko`
      );

      const [nowPlayingMovie, topRatedMovie, upComingMovie, genresMovie] =
        await Promise.all([
          nowPlayingMovieApi,
          topRatedMovieApi,
          upComingMovieApi,
          genresMovieApi,
        ]);

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          nowPlayingMovie: nowPlayingMovie.data,
          topRatedMovie: topRatedMovie.data,
          upComingMovie: upComingMovie.data,
          genresMovie: genresMovie.data.genres,
          loading: false,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_MOVIES_FAIL",
        loading: false,
      });
    }
  };
};

export const movieAction = { getMovies };
