import React, { useState } from "react";
import "../components/Body.css";

const Body = () => {
  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });

  const handleOnChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="wrapper">
      <input
        name="name"
        type="text"
        value={state.name}
        onChange={handleOnChange}
      />
      <select name="gender" value={state.gender} onChange={handleOnChange}>
        <option key={"여성"}>여성</option>
        <option key={"남성"}>남성</option>
      </select>
      <input
        name="birth"
        type="date"
        value={state.birth}
        onChange={handleOnChange}
      />
      <textarea
        name="bio"
        value={state.bio}
        onChange={handleOnChange}
      ></textarea>
    </div>
  );
};

export default Body;
