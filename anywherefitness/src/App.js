import React from "react";
import LogIn from "./components/login";
import SignUpForm from "./components/signUp";
import "./App.css";

function App() {
  return (
    <header>
      <SignUpForm />
      <LogIn />
    </header>
  );
}

export default App;
