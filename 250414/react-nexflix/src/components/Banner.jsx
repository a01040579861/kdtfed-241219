import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
  color: var(--light-color);
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-30%);
`;

const MovieTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--accent-color);
`;

const MovieOverview = styled.p`
  width: 65%;
  font-size: 1.6rem;
  line-height: 24px;
`;

const Banner = ({ movie }) => {
  console.log(movie);
  return (
    <Wrapper>
      <Img
        src={`https://image.tmdb.org/t/p/w1920/${movie.backdrop_path}`}
        alt="bgImg"
      ></Img>
      <BannerInfo>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieOverview>{movie.overview}</MovieOverview>
      </BannerInfo>
    </Wrapper>
  );
};

export default Banner;
