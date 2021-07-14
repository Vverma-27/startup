import React, { useEffect } from "react";
import Card from "../Card/card";
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
    name: "Ananya",
    achievments: [
      "Likes Web Development and playing sports",
      "Built the business model",
      "Helped in Web Development",
    ],
  };
  const dataVivek = {
    name: "Vivek",
    achievments: [
      "Likes Web Development and playing sports",
      "Built the business model",
      "Helped in Web Development",
    ],
  };
  const dataPoonam = {
    name: "Poonam",
    achievments: [
      "Likes Web Development and playing sports",
      "Built the business model",
      "Helped in Web Development",
    ],
  };
  return (
    <section className="founders-container">
      <section style={{ marginTop: "10rem" }}>
        <h3 className="heading__founders founders">Founders Of Book-Shala</h3>
        <section className="flex__cards">
          <Card data={dataVihaan} num={"1"} />
          <Card data={dataSuyash} num={"2"} />
          <Card data={dataAnanya} num={"3"} />
        </section>
        <h3 className="heading__founders teachers">
          Teacher Incharges Of Book-Shala
        </h3>
        <section className="flex__cards">
          <Card data={dataPoonam} num={"1"} />
          <Card data={dataVivek} num={"2"} />
        </section>
      </section>
    </section>
  );
};

export default Founders;
