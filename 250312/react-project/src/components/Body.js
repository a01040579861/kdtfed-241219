import React, { useState } from "react";
import "../components/Body.css";
import Viewer from "./Viewer";

// const Viewer = ({ num }) => {
//   return <div>{num % 2 === 0 ? "짝수" : "홀수"}</div>;
// };

const Body = () => {
  const [num, setNum] = useState(0);
  const OnDecrease = () => {
    setNum(num - 1);
  };
  const OnIncrease = () => {
    setNum(num + 1);
  };

  return (
    <div className="counterApp">
      <h2>{num}</h2>
      <Viewer num={num} />
      <div className="btns">
        <button onClick={OnDecrease}>-</button>
        <button onClick={OnIncrease}>+</button>
      </div>
    </div>
  );
};

export default Body;
