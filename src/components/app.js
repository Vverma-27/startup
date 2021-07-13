import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Founders from "./Founders/founders";
import Header from "./Header/header";
import "./responsive.css";

const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Header />
        <Switch>
          <Route path={"/founders"} exact component={Founders} />
        </Switch>
        {/* <div style={{ height: "10000px" }}></div> */}
      </Router>
      <div style={{ height: "1000px" }}></div>
    </div>
  );
};

export default App;
