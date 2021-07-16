import React, { useRef, useLayoutEffect } from "react";
import _ from "lodash";
import "./cardStyle.css";

const Card = ({ data, num }) => {
  const { name, achievments } = data;
  const CardRef = useRef(null);
  // const didScroll = useRef(false);
  useLayoutEffect(() => {
    function isInViewport() {
      const rect = CardRef.current.getBoundingClientRect();
      return (
        rect.top + rect.height / 2 >= 0 &&
        rect.bottom - rect.height / 2 <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    }
    const scrollFunc = () => {
      CardRef.current.classList.toggle("not-in-view", !isInViewport());
    };
    const throttledFunc = _.throttle(scrollFunc, 550, {
      trailing: true,
      leading: true,
    });
    scrollFunc();
    window.addEventListener("scroll", throttledFunc);
    window.addEventListener("resize", throttledFunc);
    return () => {
      window.removeEventListener("scroll", throttledFunc);
      window.removeEventListener("resize", throttledFunc);
    };
  }, []);
  const renderedAchievments = achievments.map((e) => {
    return (
      <li>
        <h3>{e}</h3>
      </li>
    );
  });
  const firstName = name.split(" ")[0];
  return (
    <section ref={CardRef} class="box not-in-view" id={`card--${num}`}>
      <section class="box__side front">
        <section class={`box__image image--${firstName}`}>&nbsp;</section>
        <h3 class="box__heading">
          <span className={`box__heading-span span--${num}`}>{name}</span>
        </h3>
      </section>
      <section class={`box__side back back--${num}`}>
        <section class="card__information">
          <ul>{renderedAchievments}</ul>
        </section>
      </section>
    </section>
  );
};

export default Card;
