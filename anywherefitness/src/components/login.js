import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import {Link} from "react-router-dom";

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
  width: 22rem;
  border-radius: 20px;
  background-color: white;
  margin-top: 8rem;
  margin-bottom: 8rem;
`;

export const Login = styled.div`
  border: 2px solid gray;
  width: 22rem;
  border-radius: 20px;
  background-color: cadetblue;
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

const LogIn = props => {
  const [credentials, setCredentials] = useState(initialState);
  console.log(credentials);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(credentials);
    axios
      .post(
        "https://anywhere-fitness92.herokuapp.com/api/auth/login",
        credentials
      )
      .then(response => {
        //const { history } = this.props;
        console.log(response);
        localStorage.setItem("token", response.data.token);
        props.history.push("/landing");
      })
      .catch(err => console.log(err));
  };

  const handleChanges = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <Wrapper className="wrapper">
      <Login className="LoginCard">
        <Logo src={require("../images/anywhere.png")} alt="fitness" />
        <Title>Please Login Below</Title>
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
            <select
              name="department"
              value={credentials.department}
              onChange={handleChanges}
            >
              <option name="department" value="null">
                Please select a department
              </option>
              <option name="department" value="instructor">
                Instructor
              </option>
              <option name="department" value="client">
                Client
              </option>
            </select>
          </Label>
          <Link to="/register"><ButtonRed>New Account</ButtonRed></Link>
          <ButtonGreen onClick={handleSubmit}>Login Now</ButtonGreen>
        </Form>
      </Login>
    </Wrapper>
  );
};

export default LogIn;
