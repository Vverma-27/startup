import React from "react";
import "./cardStyle.css";

const Card = ({ data, num }) => {
  const { name, achievments } = data;
  const renderedAchievments = achievments.map((e) => {
    return (
      <li>
        <h3>{e}</h3>
      </li>
    );
  });
  return (
    <section class="box" id={`card--${num}`}>
      <section class="box__side front">
        <section class={`box__image image--${num}`}>&nbsp;</section>
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
