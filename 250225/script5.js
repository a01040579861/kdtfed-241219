const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njg2ZjU4YmZjYjQwMDljNjJhY2NlYjhiYTRmOTg4MyIsIm5iZiI6MTczOTQwNjkwOC44NDQsInN1YiI6IjY3YWQzZTNjM2U0OTY3ZTEzZTM2ZDcxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rsNhmcI69qGgo2S1luwv978DhlN56V0_6hrZ6MCRcOY",
  },
};

const movieAPI =
  "https://api.themoviedb.org/3/discover/movie?language=ko-KR&page=1&with_origin_country=KR&include_adult=false";
const tvAPI =
  "https://api.themoviedb.org/3/discover/tv?language=ko-KR&page=1&with_origin_country=KR&include_adult=false";

Promise.all([fetch(movieAPI, options), fetch(tvAPI, options)])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then(([movies, tvShows]) => {
    const combinedData = {
      movies: movies.results,
      tvShows: tvShows.results,
    };
    console.log(combinedData); // 성인 제외한 영화와 드라마 출력
  })
  .catch((err) => console.error(err));
