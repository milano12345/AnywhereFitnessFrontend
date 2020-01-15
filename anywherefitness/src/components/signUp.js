import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import {
  ButtonGreen,
  ButtonRed,
  Form,
  Label,
  Input,
  Card,
  Wrapper,
  Title
} from "./login";

const initialState = {
  username: "",
  password: "",
  department: ""
};

const SignUpForm = () => {
  const [credentials, setCredentials] = useState(initialState);
  console.log(credentials);

  const handleChanges = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSignUp = e => {
    e.preventDefault();
    console.log(credentials);
    axiosWithAuth()
      .post("/createnewuser", credentials)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
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
            <select value={credentials.department} onChange={handleChanges}>
              <option value="instructor">Instructor</option>
              <option value="client">Client</option>
            </select>
          </Label>

          <ButtonRed>Go back</ButtonRed>
          <ButtonGreen type="submit">Sign Up Now</ButtonGreen>
        </Form>
      </Card>
    </Wrapper>
  );
};

export default SignUpForm;
