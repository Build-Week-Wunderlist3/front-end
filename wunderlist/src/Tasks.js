import React, { useEffect, useState } from "react";
import axiosAuth from "./AxiosAuth";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  background-blend-mode: lighten;
  background-color: white;
  box-shadow: 2px 2px 15px 0px rgba(38, 38, 38, 0.92);
  border-radius: 20px;
  margin: auto;

  margin-top: 10px;
  margin-bottom: 5px;
  width: 300px;
  height: 200px;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`;

const StyledPar = styled.p`
  color: black;
  text-align: center;
  font-size: 1rem;
  /* margin: 0 auto; */
`;

export default function Tasks() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosAuth()
      .get("api/category/")
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <StyledDiv2 className="Task">
      {data.map((taskData) => {
        console.log(taskData);

        return (
          <StyledDiv>
            <StyledPar>
              <br></br>
              <br></br>
              <strong>id: {taskData.id}</strong>
            </StyledPar>

            <StyledPar>
              <strong>Category: {taskData.category}</strong>
            </StyledPar>

            <StyledPar>
              <strong>User ID: {taskData.userId}</strong>
            </StyledPar>
          </StyledDiv>
        );
      })}
    </StyledDiv2>
  );
}
