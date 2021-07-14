import React, { useRef, useEffect } from "react";
import "./cardStyle.css";

const Card = ({ data, num }) => {
  const { name, achievments } = data;
  const CardRef = useRef(null);
  const didScroll = useRef(false);
  useEffect(() => {
    function isInViewport() {
      const rect = CardRef.current.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    }
    const scrollFunc = () => {
      if (didScroll.current) return;
      CardRef.current.classList.toggle("not-in-view", !isInViewport());
      didScroll.current = true;
      setTimeout(() => (didScroll.current = false), 600);
    };
    scrollFunc();
    window.addEventListener("scroll", scrollFunc);
    return () => {
      window.removeEventListener("scroll", scrollFunc);
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
