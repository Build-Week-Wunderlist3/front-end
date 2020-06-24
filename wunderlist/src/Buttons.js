import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  -webkit-appearance: none;
  width: 200px;
  margin: auto;
  border: 1px solid #333;
  margin-bottom: 10px;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 8px;
  color: white;
  background: #00bcff;
  

  &:hover {
    background: cyan;
    transition: 0.3s all;
    
  }

  &:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;

  }

  &:disabled {
    opacity: 0.4;
  
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
