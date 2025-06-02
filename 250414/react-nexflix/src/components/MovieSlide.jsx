import React from "react";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import MovieCard from "./MovieCard";

const Wrapper = styled.div`
  color: var(--light-color);
  padding-left: 14px;
`;

const MovieSlide = ({ movies }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1800 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1800, min: 1500 },
      items: 5,
    },
    middleDesktop: {
      breakpoint: { max: 1500, min: 1200 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1200, min: 900 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 900, min: 400 },
      items: 2,
    },
    smallMobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
    },
  };

  return (
    <Wrapper>
      <Carousel responsive={responsive} infinite={true}>
        {movies.results.map((item, index) => (
          <MovieCard key={index} item={item} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default MovieSlide;
