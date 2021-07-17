import React from "react";
import "./loaderStyle.css";

const Loader = () => {
  return (
    <div>
      <section class="ui segment loadingContainer">
        <section class="ui active dimmer">
          <section class="ui medium text loader">Loading...</section>
        </section>
      </section>
    </div>
  );
};

export default Loader;
