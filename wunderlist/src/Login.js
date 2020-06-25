import React from "react";
import Tasks from "./Tasks"
import axiosAuth from "./AxiosAuth"
import { useForm, ErrorMessage } from "react-hook-form";
import listimg from "../src/list.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Signup.css";
import "./Button.css";

const StyledPar = styled.p`
  color: red;
  font-size: 0.7rem;
  display: block;
  box-sizing: border-box;
  width: 90%;
  margin: auto;

  &:before {
    display: inline;
    content: "⚠ ";
  }
`;

export default function Login() {
  const {
    register,
    errors,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: "onBlur",
    validateCriteriaMode: "all",
  });
  const onSubmit = (data, e) => {
    axiosAuth().post("api/auth/login/", data).then(response => {
      console.log(response)
      localStorage.setItem("token", response.data.token)
    })
    console.log(JSON.stringify(data));
    e.target.reset();
  };


  // const onSubmit = data => console.log(data, "success!");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="formShadowParent">
        <div className="formShadow">
          <div className="border">
            <h2>Login</h2>
            <div className="checkIcon">
              <Link style={{textDecoration:"none"}} to="/">
                <img alt="checklist icon" src={listimg}></img>
              </Link>
            </div>
            <label>Username:</label>
            <input
              name="username"
              id="username"
              placeholder="Username"
              ref={register({
                required: "Required input",
                minLength: {
                  value: 3,
                  message: "This input must be at least 3 characters long.",
                },
                maxLength: {
                  value: 15,
                  message: "Username is too long.",
                },
              })}
            />

            <ErrorMessage errors={errors} name="username">
              {({ messages }) => {
                return (
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <StyledPar key={type}>{message}</StyledPar>
                  ))
                );
              }}
            </ErrorMessage>

            <label>Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              ref={register({
                required: "Required input",
                minLength: {
                  value: 6,
                  message: "Password must be a minimum of 6 characters long.",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum password length is 20 characters.",
                },
              })}
            />

            <ErrorMessage errors={errors} name="password">
              {({ messages }) => {
                return (
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <StyledPar key={type}>{message}</StyledPar>
                  ))
                );
              }}
            </ErrorMessage>
            
            <button disabled={isSubmitting} type="submit">
              Login
            </button>

            <Link style={{textDecoration:"none"}} to="/Signup">
              <button type="button">Sign up</button>
            </Link>

            <Link to="/Tasks">
            <button type="button">Tasks</button>
            </Link>

            <div className="buttonPadding"></div>
          </div>
        </div>
      </div>
    </form>
  );
}
