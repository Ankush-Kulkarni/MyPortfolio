import React from "react";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Skills from "./Components/Skills";
import Hire from "./Components/Hire";
import { Switch, Route, Redirect } from "react-router-dom";
import Menu from "./Components/Menu";
import "./index.scss";

const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/hire" component={Hire} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
