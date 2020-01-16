import { Switch, Route } from "react-router-dom";
import LogIn from "./login";
import SignUpForm from "./signUp";
import React from "react";
import Landing from "./landing";

const Main = () => (
  <Switch>
    <Route exact path="/" component={SignUpForm} />
    <Route path="/login" component={LogIn} />
    <Route path="/landing" component={Landing} />
  </Switch>
);

export default Main;
