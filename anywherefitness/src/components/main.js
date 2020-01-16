import { Switch, Route } from "react-router-dom";
import LogIn from "./login";
import SignUpForm from "./signUp";
import React from "react";
import ClientDash from "./clientDash";
import InstructorDash from "./instructorDash";

const Main = () => (
  <Switch>
    <Route exact path="/" component={SignUpForm} />
    <Route path="/login" component={LogIn} />
    <Route path="/client" component={ClientDash} />
    <Route path="/instructor" component={InstructorDash} />
  </Switch>
);

export default Main;
