import React from "react";
import { Link } from "react-router-dom";
import { useForm, ErrorMessage } from "react-hook-form";
import styled from "styled-components";
import listimg from "../src/list.png";
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

export default function Signup() {
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
    console.log(JSON.stringify(data));
    e.target.reset();
  };
  // const onSubmit = data => console.log(data, "success!");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="formShadowParent">
        <div className="formShadow">
          <div className="border">
            <h2>Sign Up</h2>
            <div className="checkIcon">
              <Link style={{ textDecoration:"none" }} to="/">
                <img alt="checklist icon" src={listimg}></img>
              </Link>
            </div>
            <label>Name:</label>
            <input
              name="name"
              id="name"
              placeholder="Name"
              ref={register({
                required: "Required input",
                minLength: {
                  value: 4,
                  message: "This input must be at least 4 characters long.",
                },
                maxLength: {
                  value: 40,
                  message: "This input exceed maxLength.",
                },
              })}
            />
            <ErrorMessage errors={errors} name="name">
              {({ messages }) => {
                return (
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <StyledPar key={type}>{message}</StyledPar>
                  ))
                );
              }}
            </ErrorMessage>

            {/* <label>Email:</label>
            <input
              name="email"
              id="email"
              placeholder="Email"
              ref={register({
                required: "Required input",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter valid email.",
                },
                maxLength: {
                  value: 40,
                  message: "This input exceed maxLength.",
                },
              })}
            />

            <ErrorMessage errors={errors} name="email">
              {({ messages }) => {
                return (
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <StyledPar key={ type }>{ message }</StyledPar>
                  ))
                );
              }}
            </ErrorMessage> */}

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
                    <StyledPar key={ type }>{ message }</StyledPar>
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
              Sign Up
            </button>
            <Link style={{textDecoration:"none"}} to="Login">
              <button type="button">Login</button>
            </Link>
            <div className="buttonPadding"></div>
          </div>
        </div>
      </div>
    </form>
  );
}
