import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

import App from "./Components/App";
import Docs from "./Components/Docs"
import Header from "./Components/Header";

const Main = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch >
          <Route path="/docs" component={Docs} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
