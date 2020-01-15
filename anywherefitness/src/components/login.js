import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export const ButtonGreen = styled.button`
  background-color: #28a745;
  border-color: 1px #28a745;
  border-radius: 10%;
  color: white;
  width: 40%;
  margin-left: 3rem;
  height: 2rem;
`;

export const ButtonRed = styled.button`
  background-color: darkred;
  border-color: 1px crimson;
  border-radius: 10%;
  color: white;
  width: 40%;
  height: 2rem;
  vertical-align: top;
`;

export const Form = styled.form`
  display: block;
  width: 300px;
  margin: 50px auto;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: black;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em;
  color: black;
  background-color: lightgray;
  border: silver;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

export const Card = styled.div`
  border: 2px solid gray;
  width: 20rem;
  border-radius: 20px;
  background-color: white;
  margin-top: 8rem;
  margin-bottom: 8rem;
`;

export const Wrapper = styled.div`
  background-color: #2b3137;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Logo = styled.img`
  width: 90%;
  margin-top: 15%;
  margin-left: 6%;
`;

const initialState = {
  username: "",
  password: "",
  department: ""
};

const LogIn = () => {
  const [credentials, setCredentials] = useState(initialState);
  console.log(credentials);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(
        `https://github-user-breakdown.herokuapp.com/login`,
        `grant_type=password&username=${credentials.username}&password=${credentials.password}`,
        {
          headers: {
            Authorization: `Basic ${btoa("lambda-school:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.access_token);
        // props.history.push('')
      })
      .catch(err => console.log(err));
  };

  const handleChanges = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <Wrapper className="wrapper">
      <Card className="LoginCard">
        <Title>Github User Card Login</Title>
        <Form className="LoginForm">
          <Label>
            Username
            <Input
              name="username"
              type="text"
              value={credentials.username}
              onChange={handleChanges}
            />
          </Label>
          <Label>
            Password
            <Input
              name="password"
              type="password"
              value={credentials.password}
              onChange={handleChanges}
            />
          </Label>
          <Label>
            Department
            <select value={credentials.department} onChange={handleChanges}>
              <option value="instructor">Instructor</option>
              <option value="client">Client</option>
            </select>
          </Label>
          <ButtonRed>New Account</ButtonRed>
          <ButtonGreen onClick={handleSubmit}>Login Now</ButtonGreen>
        </Form>
      </Card>
    </Wrapper>
  );
};

export default LogIn;
