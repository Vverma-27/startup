import React, { Suspense, useEffect, lazy } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
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

  const Founders = lazy(() => import("./Founders/founders"));
  const Home = lazy(() => import("./Home/home"));
  const Functionality = lazy(() => import("./Functionality/functionality"));
  const BusinessPlan = lazy(() => import("./BusinessPlan/businessPlan"));
  const Vision = lazy(() => import("./Vision/Vision"));
  const Footer = lazy(() => import("./Footer/footer"));
  const HeaderFinal = lazy(() => import("./Header/headerFinal"));
  // console.log(header());
  return (
    <section style={{ height: "100%" }}>
      <Router>
        <Suspense fallback="loading">
          <HeaderFinal />
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
          <Footer />
        </Suspense>
      </Router>
    </section>
  );
};

export default App;
