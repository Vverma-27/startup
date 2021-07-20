import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./Loader/loader";
import "./responsive.css";
const App = () => {
  const showLoader = () => {
    document.querySelector(".loadingContainer").classList.remove("load--hide");
  };
  const hideLoader = () => {
    setTimeout(
      () =>
        document.querySelector(".loadingContainer").classList.add("load--hide"),
      1500
    );
    // console.log("yes");
  };
  // useEffect(() => {
  //   setTimeout(() => hideLoader(), 1000);
  // }, []);
  const Founders = lazy(() => import("./Founders/founders"));
  const Home = lazy(() => import("./Home/home"));
  const Functionality = lazy(() => import("./Functionality/functionality"));
  const BusinessModel = lazy(() => import("./BusinessModel/businessModel"));
  const Vision = lazy(() => import("./Vision/Vision"));
  const Footer = lazy(() => import("./Footer/footer"));
  const HeaderFinal = lazy(() => import("./Header/headerFinal"));
  const MarketAnalysis = lazy(() => import("./MarketAnalysis/marketAnalysis"));
  // console.log(header());
  return (
    <section style={{ height: "100%" }}>
      <Router>
        <Suspense fallback={<Loader />}>
          <HeaderFinal />
          <Switch>
            <Route
              path={"/"}
              exact
              component={() => <Home hide={hideLoader} />}
            />
            <Route
              path={"/founders"}
              exact
              component={() => <Founders hide={hideLoader} />}
            />
            <Route
              path={"/business-Model"}
              exact
              component={() => <BusinessModel hide={hideLoader} />}
            />
            <Route
              path={"/Vision"}
              exact
              component={() => <Vision hide={hideLoader} />}
            />
            <Route
              path={"/functionality"}
              exact
              component={() => <Functionality hide={hideLoader} />}
            />
            <Route
              path={"/market-analysis"}
              exact
              component={() => <MarketAnalysis hide={hideLoader} />}
            />
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </section>
  );
};

export default App;
