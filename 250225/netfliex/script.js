import { API_KEY } from "./inv.js";

const TMDB_URL = "https://api.themoviedb.org/3";

// NowPlaying DB
const nowPlaying = async () => {
  const url = `${TMDB_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

// UpComing DB
const upComing = async () => {
  const url = `${TMDB_URL}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

// TopRated DB
const topRated = async () => {
  const url = `${TMDB_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

// Promise DBs
const getMovies = async () => {
  const [nowPlayingMovie, upComingMovie, topRatedMovie] = await Promise.all([
    nowPlaying(),
    upComing(),
    topRated(),
  ]);

  // Main Slider
  const mainSlider = document.querySelector(".mainSlider");

  nowPlayingMovie.forEach((movie) => {
    const figure = document.createElement("figure");
    figure.innerHTML = `<img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}">`;
    mainSlider.appendChild(figure);
  });
  console.log(nowPlayingMovie);

  // Fade Effect
  const figures = mainSlider.querySelectorAll("figure");
  let currentIndex = 0;

  const showNextSlide = () => {
    figures[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % figures.length;
    figures[currentIndex].classList.add("active");
  };

  figures[currentIndex].classList.add("active");

  setInterval(showNextSlide, 3000);
};

getMovies();

// Gnb li Event
const naviLis = document.querySelectorAll(".gnb >ul > li");
const subMenus = document.querySelectorAll(".submenu");
const menuBg = document.querySelector(".menu-bg");

naviLis.forEach((naviLi) => {
  naviLi.addEventListener("mouseover", () => {
    subMenus.forEach((submenu) => {
      submenu.style.opacity = "1";
      submenu.style.maxHeight = "300px";
      submenu.style.transition = "all 0.5s";
      menuBg.style.opacity = "1";
      menuBg.style.maxHeight = "320px";
      menuBg.style.transition = "all 0.5s";
    });
  });
  naviLi.addEventListener("mouseout", () => {
    subMenus.forEach((submenu) => {
      submenu.style.opacity = "0";
      submenu.style.maxHeight = "0";
      menuBg.style.opacity = "0";
      menuBg.style.maxHeight = "0";
    });
  });
});
