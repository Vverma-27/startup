import React, { useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Founders from "./Founders/founders";
import Home from "./Home/home";
import Functionality from "./Functionality/functionality";
import BusinessPlan from "./BusinessPlan/businessPlan";
import Vision from "./Vision/Vision";
import Footer from "./Footer/footer";
import HeaderFinal from "./Header/headerFinal";
import "./responsive.css";

const App = () => {
  // const showLoader = () => {
  //   document.querySelector(".loadingContainer").classList.remove("load--hide");
  // };
  const hideLoader = () => {
    document.querySelector(".loadingContainer").classList.add("load--hide");
  };
  useEffect(() => {
    setTimeout(() => hideLoader(), 1000);
  }, []);

  // console.log(header());
  return (
    <section style={{ height: "100%" }}>
      <Router>
        <HeaderFinal />

        <section style={{ marginTop: "5rem", padding: "10rem 2rem" }}>
          <Switch>
            <Route path={"/"} exact component={() => <Home />} />
            <Route path={"/founders"} exact component={() => <Founders />} />
            <Route
              path={"/business-plan"}
              exact
              component={() => <BusinessPlan />}
            />
            <Route path={"/Vision"} exact component={() => <Vision />} />
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
