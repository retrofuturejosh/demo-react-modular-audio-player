import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Examples from "./Components/Examples";
import Docs from "./Components/Docs"
import Header from "./Components/Header";

const Main = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch >
          <Route path="/docs" component={Docs} />
          <Route path="/" component={Examples} />
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
