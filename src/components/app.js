import React, { useState, useEffect, useLayoutEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Founders from "./Founders/founders";
import Home from "./Home/home";
import Functionality from "./Functionality/functionality";
import BusinessPlan from "./BusinessPlan/businessPlan";
import Features from "./Features/features";
import Header from "./Header/header";
import SmallHeader from "./Header/headerSmall";
import Footer from "./Footer/footer";
import "./responsive.css";

const App = () => {
  const [width, setwidth] = useState(window.innerWidth);
  const showLoader = () => {
    document.querySelector(".loadingContainer").classList.remove("load--hide");
  };
  const hideLoader = () => {
    document.querySelector(".loadingContainer").classList.add("load--hide");
  };
  const header = () => {
    return width > 525 ? <Header /> : <SmallHeader />;
  };
  useEffect(() => {
    setTimeout(() => hideLoader(), 1000);
  }, []);
  useLayoutEffect(() => {
    const resizeFunc = () => {
      setwidth(window.innerWidth);
      console.log("called");
    };
    window.addEventListener("resize", resizeFunc);
    return () => {
      window.removeEventListener("resize", resizeFunc);
    };
  }, []);

  // console.log(header());
  return (
    <section style={{ height: "100%" }}>
      <Router>
        {header()}

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
        <Footer />
        {/* <section style={{ height: "10000px" }}></section> */}
      </Router>
    </section>
  );
};

export default App;
