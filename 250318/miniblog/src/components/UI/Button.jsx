import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  border: 1px solid var(--primary-light-color);
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: var(--primary-dark-color);
    color: var(--primary-light-color);
  }
`;

const Button = ({ title, onClick }) => {
  return <StyledBtn onClick={onClick}>{title || "button"}</StyledBtn>;
};

export default Button;
