import React, { useState, useEffect } from "react";
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
  Subtitle,
} from "./login";

const initialState = {
  username: "",
  password: "",
  department: "",
};

const SignUpForm = (props) => {
  const [credentials, setCredentials] = useState(initialState);
  const [error, setError] = useState({ error: "" });
  console.log(credentials);
  console.log("newerror", error);
  console.log(props);

  const handleChanges = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    const textBox = document.querySelector(".code");
    console.log("value", event.target.value);
    if (event.target.value === "instructor") {
      textBox.style.display = "block";
    } else if (event.target.value === "client") {
      textBox.style.display = "none";
    }
  };

  useEffect(() => {
    error.error && handleError(error.error.response.status);
  }, [error.error]);

  const handleError = (err) => {
    if (err === 400) {
      alert(
        "Missing form data. Username, password and department must be selected."
      );
    } else if (err === 500) {
      alert(
        "Incorrect instructor code or Username is already in use, try again with a new code or Username."
      );
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
      .then((res) => {
        console.log(res);
        if (res.status === "400") {
          alert("Missing information");
        }
        props.history.push("/login");
      })
      .catch((err) => setError({ error: err }));
  };
  return (
    <Wrapper className="Wrapper">
      <Card className="SignUpCard">
        <Title>Create a New Account</Title>
        <Subtitle>
          If you already have an account, please click Log In to sign in now.
        </Subtitle>
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
              <option name="department" value="instructor">
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
              type="text"
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
      {/* {error.error && (
        <h5 className="error">{handleError(error.error.response.status)}</h5>
      )} */}
    </Wrapper>
  );
};

export default SignUpForm;
