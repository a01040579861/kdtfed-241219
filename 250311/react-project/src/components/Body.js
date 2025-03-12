import React from "react";
import "./Body.css";

const Body = ({ name }) => {
  console.log(name);
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default Body;
