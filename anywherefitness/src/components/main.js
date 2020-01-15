import { Switch, Route } from "react-router-dom";
import LogIn from "./login";
import SignUpForm from "./signUp";
import React from "react";

const Main = () => (
  <Switch>
    <Route exact path="/" component={SignUpForm} />
    <Route path="/login" component={LogIn} />
  </Switch>
);

export default Main;
