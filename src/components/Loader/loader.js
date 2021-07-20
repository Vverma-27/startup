import React from "react";
import favicon from "../../images/Atheneum__favicon.svg";
import "./loaderStyle.css";

const Loader = () => {
  return (
    <div>
      <section class="ui segment loadingContainer">
        <section class="ui active dimmer">
          <img src={favicon} style={{ height: "25rem" }} />
        </section>
      </section>
    </div>
  );
};

export default Loader;
