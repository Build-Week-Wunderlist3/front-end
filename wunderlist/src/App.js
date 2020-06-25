import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Signup from "./Signup";
import Login from "./Login";
import Tasks from "./Tasks"
import Home from "./Home";


const Header = styled.header`
  width: 100%;
  color: white;
  margin: 0 auto;
  display: flex;
  font-size: 2.5rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  background-color: #0084cb;
  height: 20vh;
  width: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <body>
      <div className="App">
        <Header className="siteBanner">Wunderlist</Header>

        <Route exact path="/Tasks">
          <Tasks />
        </Route>

        <Route exact path="/Signup">
          <Signup />
        </Route>

        <Route exact path="/Login">
          <Login />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </body>
  );
}

export default App;
