import React, { useState, useEffect, useRef } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Founders from "./Founders/founders";
import Home from "./Home/home";
import Functionality from "./Functionality/functionality";
import BusinessPlan from "./BusinessPlan/businessPlan";
import Features from "./Features/features";
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
    setTimeout(() => hideLoader(), 300);
  }, []);
  return (
    <section style={{ height: "100%" }}>
      <Router>
        {header}

        <section style={{ marginTop: "5rem", padding: "10rem 2rem" }}>
          <Switch>
            <Route path={"/"} exact component={() => <Home />} />
            <Route path={"/founders"} exact component={() => <Founders />} />
            <Route
              path={"/business-plan"}
              exact
              component={() => <BusinessPlan />}
            />
            <Route path={"/features"} exact component={() => <Features />} />
            <Route
              path={"/functionality"}
              exact
              component={() => <Functionality />}
            />
          </Switch>
        </section>
        {/* <section style={{ height: "10000px" }}></section> */}
      </Router>
    </section>
  );
};

export default App;
