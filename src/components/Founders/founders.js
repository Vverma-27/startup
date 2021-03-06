import React, { lazy, useEffect } from "react";
import "./founderStyle.css";

const Founders = ({ hide }) => {
  const dataVihaan = {
    name: "Vihaan Verma",
    achievments: [
      "Likes Web Development and playing sports",
      "Favourite sport is Football",
      "Has become lethargic since lockdown started",
    ],
    link: "https://github.com/Vverma-27",
  };
  const dataSuyash = {
    name: "Suyash Handa",
    achievments: [
      "Winner of the Lenovo SmarterEd Scholarship 2021",
      "Fond of writing, debates and MUNs",
      "Also plays the guitar and runs a YouTube Channel",
      "Likes project designing, illustrating and Web Development",
    ],
    link: "https://github.com/Boolean-Autocrat",
  };
  const dataAnanya = {
    name: "Ananya Mukherjee",
    achievments: [
      "amateur violin, ukulele, keyboard and kalimba player",
      "fantasy-fiction addict",
      "part-time web-developer, python programmer, instrumentalist, swimmer, road cyclist, human and much more which won't fit.",
    ],
    link: "https://github.com/Mathananya",
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
  useEffect(() => hide(), []);
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
