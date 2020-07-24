import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  ButtonGreen,
  ButtonRed,
  Form,
  Label,
  Input,
  Card,
  Wrapper,
  Title,
} from "./login";

const initialState = {
  username: "",
  password: "",
  department: "",
};

const SignUpForm = (props) => {
  const [credentials, setCredentials] = useState(initialState);
  console.log(credentials);
  console.log(props);

  const handleChanges = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const showCodeBox = (e) => {
    const textBox = document.querySelector(".code");
    console.log(e.target.value);
    if (e.target.value === "instructor") {
      textBox.style.display = "block";
    } else {
      textBox.style.display = "none";
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(credentials);
    axios
      .post(
        "https://anywhere-fitness92.herokuapp.com/api/auth/register",
        credentials
      )
      .then((response) => {
        console.log(response);
        props.history.push("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Wrapper className="Wrapper">
      <Card className="SignUpCard">
        <Title>Create a New Account</Title>
        <Form onSubmit={handleSignUp}>
          <Label>
            Username
            <Input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChanges}
            />
          </Label>
          <Label>
            Password
            <Input
              type="password"
              name="password"
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
              <option
                name="department"
                onChange={showCodeBox}
                value="instructor"
              >
                Instructor
              </option>
              <option name="department" value="client">
                Client
              </option>
            </select>
          </Label>
          <Label className="code" style={{ display: "none" }}>
            Enter Code
            <Input
              type="code"
              name="code"
              value={credentials.code}
              onChange={handleChanges}
            />
          </Label>

          <Link to="/login">
            <ButtonRed>Log In</ButtonRed>
          </Link>
          <ButtonGreen type="submit" onClick={handleSignUp}>
            Create Account
          </ButtonGreen>
        </Form>
      </Card>
    </Wrapper>
  );
};

export default SignUpForm;
