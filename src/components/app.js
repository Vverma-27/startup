import React, { useState, useEffect, useRef } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Founders from "./Founders/founders";
import Header from "./Header/header";
import "./responsive.css";

const App = () => {
  const showLoader = () => {
    document.querySelector(".loadingContainer").classList.remove("load--hide");
  };
  const hideLoader = () => {
    document.querySelector(".loadingContainer").classList.add("load--hide");
  };

  useEffect(() => {
    const id = setTimeout(() => hideLoader(), 300);
  }, []);
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Header />
        <Switch>
          <Route path={"/founders"} exact component={() => <Founders />} />
        </Switch>
        <div style={{ height: "10000px" }}></div>
      </Router>
    </div>
  );
};

export default App;
