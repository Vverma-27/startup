import React, { lazy } from "react";
import "./founderStyle.css";

const Founders = () => {
  const dataVihaan = {
    name: "Vihaan Verma",
    achievments: [
      "Likes Web Development and playing sports",
      "Built the business model",
      "Helped in Web Development",
    ],
  };
  const dataSuyash = {
    name: "Suyash Handa",
    achievments: [
      "Likes Physics and Chemistry",
      "Thought of Book Shala",
      "Helped in Web Development",
    ],
  };
  const dataAnanya = {
    name: "Ananya Mukherjee",
    achievments: [
      "Likes Web Development and playing sports",
      "Built the business model",
      "Helped in Web Development",
    ],
  };
  // const dataVivek = {
  //   name: "Vivek",
  //   achievments: [
  //     "Likes Web Development and playing sports",
  //     "Built the business model",
  //     "Helped in Web Development",
  //   ],
  // };
  // const dataPoonam = {
  //   name: "Poonam",
  //   achievments: [
  //     "Likes Web Development and playing sports",
  //     "Built the business model",
  //     "Helped in Web Development",
  //   ],
  // };

  const Card = lazy(() => import("../Card/card"));
  return (
    <section className="founders-container" id="common_container">
      <h3
        className="heading__founders founders glitch"
        data-text="Founders of Atheneum"
      >
        Founders Of Atheneum
      </h3>
      <section className="flex__cards">
        <Card data={dataVihaan} num={"1"} />
        <Card data={dataSuyash} num={"2"} />
        <Card data={dataAnanya} num={"3"} />
      </section>
    </section>
  );
};

export default Founders;
