import React from "react";
import "./visionStyle.css";
import gallery1 from "../../images/gallery1.jpg";
import image1 from "../../images/image1.jpeg";
import gallery2 from "../../images/gallery2.jpeg";
import gallery3 from "../../images/gallery3.jpeg";
import gallery4 from "../../images/gallery4.jpeg";
import gallery5 from "../../images/gallery5.jpeg";
import gallery6 from "../../images/gallery6.jpeg";

const Vision = () => {
  return (
    <section className="vision" id="common_container">
      <section id="heading">
        <section id="pageTitle">
          OUR VISION <i class="icon eye big"></i>
        </section>
        <section id="quote">
          Vision is the ability to see potential in what others overlook &mdash;
          Rick Warren
        </section>
      </section>

      <section id="vision-body">
        <section>
          <section id="part1">
            <img src={image1} alt="boy carrying books" id="image1" />
            <section class="text text1">
              At<mark> Atheneum </mark>, our goal is to make knowledge
              accessible to all, and to provide a safe and effortless avenue for
              students to contribute and exchange second-hand books. We
              persevere to make sure that every student has full access to the
              books they need to educate themselves and actively increase their
              learning.
            </section>
          </section>
        </section>
        <hr />
        <section id="part2">
          <center>
            <section class="goals">
              <section id="goal-header">
                <br />
                OUR GOALS:
              </section>
              <i class="icon book huge"></i> Exchange of knowledge
              <br />
              <i class="icon huge graduation"></i> Education for all
              <br />
              <i class="icon tree huge"></i> Environmental sustainability
              <br />
              <i class="icon shipping fast huge"></i> Efficiency and Reliability
              <br />
            </section>
          </center>
        </section>
        <br />
        <section id="part3">
          <center>
            <section class="gallery">
              <section class="row">
                <section class="column">
                  <img src={gallery1} />
                  <img src={gallery2} />
                </section>
                <section class="column">
                  <img src={gallery3} />
                  <img src={gallery4} />
                </section>
                <section class="column">
                  <img src={gallery5} />
                  <img src={gallery6} />
                </section>
              </section>
            </section>
          </center>
        </section>
      </section>
    </section>
  );
};

export default Vision;
