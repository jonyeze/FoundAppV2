import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/login/signIn";

const App: React.FC = () => {
  return <>
    <Home />
    <SignIn />
  </>;
};

export default App;
