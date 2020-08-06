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
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const initialState = {
  username: "",
  password: "",
  department: "",
};

const SignUpForm = (props) => {
  const [credentials, setCredentials] = useState(initialState);
  const [error, setError] = useState({ error: "" });
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [unique, setUnique] = React.useState(false);

  const classes = useStyles();

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

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    error.error && handleError(error.error.response.status);
  }, [error.error]);

  const handleError = (err) => {
    if (err === 400) {
      // alert(
      //   "Missing form data. Username, password and department must be selected."
      // );
      setOpen(true);
      setLoading(false);
    } else if (err === 500) {
      setUnique(true);
      setLoading(false);
    }
  };

  const handleSignUp = (e) => {
    setLoading(true);
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
        <div className={classes.root}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              Missing form data. Please fill in all fields.
            </Alert>
          </Snackbar>
          <Snackbar open={unique} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              Incorrect instructor code or username is already in use, try again
              with a new code or username.
            </Alert>
          </Snackbar>
        </div>
        <Title>Create a New Account</Title>
        <Subtitle>
          Create a new account below or click login to sign in with your
          username and password.
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
          <ButtonGreen type="submit" disabled={loading} onClick={handleSignUp}>
            Create Account
          </ButtonGreen>
          {loading ? <div style={{ textAlign: "right" }}>Loading...</div> : ""}
        </Form>
      </Card>
      {/* {error.error && (
        <h5 className="error">{handleError(error.error.response.status)}</h5>
      )} */}
    </Wrapper>
  );
};

export default SignUpForm;
