import React from "react";
import styled from "styled-components";
import Button from "./Buttons";
import { Link } from "react-router-dom";
import checkimg from "../src/check.png";

const StyledDiv = styled.div`
  color: deepskyblue;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 3rem;
  margin-top: 2rem;
  font-size: 8rem;
`;

const StyledPar = styled.p`
  color: white;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const StyledImg = styled.img`
  width: 150px;
  height: 150px;
`;

const StyledP2 = styled.p`
  color: white;
  text-align: center;
  margin-top: 3rem;
  font-size: 1.5rem;
`;


function Home() {
  return (
    <div>
      <StyledP2>Welcome to Wunderlist</StyledP2>
      <StyledPar>
        It is super easy to remember all the little recurring to-do's and
        surprise to-do's that popup unexpectedly.
      </StyledPar>
      <StyledDiv className="checkIcon">
        <StyledImg src={checkimg}></StyledImg>
      </StyledDiv>
      <Link style={{textDecoration:"none"}} to="Login">
        <Button>Login</Button>
      </Link>
      <Link style={{textDecoration:"none"}} to="Signup">
        <Button>Signup</Button>
      </Link>
    </div>
  );
}

export default Home;
