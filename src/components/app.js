import React, { useState, useEffect, useRef } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Founders from "./Founders/founders";
import Header from "./Header/header";
import SmallHeader from "./Header/headerSmall";
import "./responsive.css";

const App = () => {
  const showLoader = () => {
    document.querySelector(".loadingContainer").classList.remove("load--hide");
  };
  const hideLoader = () => {
    document.querySelector(".loadingContainer").classList.add("load--hide");
  };
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const header = !(width > 425) ? <SmallHeader /> : <Header />;

  useEffect(() => {
    const id = setTimeout(() => hideLoader(), 300);
  }, []);
  return (
    <div style={{ height: "100%" }}>
      <Router>
        {header}
        <Switch>
          <Route path={"/founders"} exact component={() => <Founders />} />
        </Switch>
        {/* <div style={{ height: "10000px" }}></div> */}
      </Router>
    </div>
  );
};

export default App;
