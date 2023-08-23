import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const history = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let formData = {
      name,
      id,
      password,
      phone,
      city,
    };

    if (validate()) {
      axios
        .post("http://localhost:5000/users", formData)
        .then((response) => {
          if (response.status === 201) {
            alert("Registration Successful!");
            history("/login");

            setName("");
            setId("");
            setPassword("");
            setPhone("");
            setCity("");
          }
        })
        .catch(() => {
          alert("Email Already exists! Try another Email.");
        });
    }
  };

  const validate = () => {
    let result = true;
    if (
      id === "" ||
      password === "" ||
      name === "" ||
      phone === "" ||
      city === ""
    ) {
      result = false;
      alert("Please enter all fields !!");
    } else if (!id.includes("@" || ".")) {
      result = false;
      alert("Please enter a valid email !!");
    } else {
      result = true;
    }
    return result;
  };

  return (
    <>
      <Wrapper>
        <div>
          <h1>Register</h1>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
              />
            </div>
            <div>
              <label>Phone:</label>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone"
              />
            </div>
            <div>
              <label>City:</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter City"
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 30px auto;
  border: 1px solid red;
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
export default Register;
