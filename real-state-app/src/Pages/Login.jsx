import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(id, password);

    if (validate()) {
      axios
        .get(`http://localhost:5000/users/${id}`)
        .then(() => {
          setId("");
          setPassword("");
          alert("Login Successful !!");
        })
        .catch(() => {
          alert("No user registered with this email !!");
        });
    }
  };

  const validate = () => {
    let result = true;
    if (id === "" && password === "") {
      result = false;
      alert("Please enter all fields !!");
    }
    if (password === "") {
      result = false;
      alert("Please enter a password !!");
    }
    if(!id.includes("@" || ".")) {
      result = false;
      alert("Please enter a valid email !!");
    }
    return result;
  };
  return (
    <Wrapper>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="">Email :</label>
            <input
              value={id}
              type="id"
              placeholder="Enter Email"
              autoSave="id"
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Password :</label>
            <input
              value={password}
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 30px auto;
  /* border: 1px solid red; */
  div {
    width: 40%;
    height: auto;
    margin: auto;
    /* border: 1px solid red; */
    form {
      height: auto;
      padding-bottom: 30px;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
        rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 30px;
        width: 60%;
        input {
          width: 60%;
          height: 25px;
          border-radius: 5px;
          border: 2px solid black;
        }
      }
      button {
        width: 120px;
        height: 35px;
        margin-top: 50px;
        margin-left: 40%;
        border-radius: 5px;
        background-color: #971e06;
        color: white;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
`;
export default Login;
