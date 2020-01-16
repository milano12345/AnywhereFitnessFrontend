import React, { useState } from "react";
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
  Logo
} from "./login";

const initialState = {
  username: "",
  password: "",
  department: ""
};

const SignUpForm = props => {
  const [credentials, setCredentials] = useState(initialState);
  console.log(credentials);
  console.log(props);

  const handleChanges = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSignUp = e => {
    e.preventDefault();
    console.log(credentials);
    axios
      .post(
        "https://anywhere-fitness92.herokuapp.com/api/auth/register",
        credentials
      )
      .then(response => {
        console.log(response);
        props.history.push("/login");
      })
      .catch(err => console.log(err));
  };
  return (
    <Wrapper className="Wrapper">
      <Card className="SignUpCard">
        <Logo src={require("../images/anywhere.png")} alt="fitness" />
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
              <option name="department" value="instructor">
                Instructor
              </option>
              <option name="department" value="client">
                Client
              </option>
            </select>
          </Label>

          <ButtonRed>Go back</ButtonRed>
          <ButtonGreen type="submit" onClick={handleSignUp}>
            Sign Up Now
          </ButtonGreen>
        </Form>
      </Card>
    </Wrapper>
  );
};

export default SignUpForm;
