import React, { useEffect } from "react";
import "./modelStyle.css";
import "../MarketAnalysis/marketStyle.css";

const BusinessPlan = ({ hide }) => {
  useEffect(() => hide(), []);
  return (
    <section id="common_container">
      <section id="heading">
        <section id="pageTitle">Market Analysis Of Atheneum</section>
      </section>
      <section className="model__grid">
        <section className="row row-1">
          <h1 className="title">Key Partners</h1>
          <ul className="list">
            <li className="point">
              Atheneum’s key partners would be a 3rd-party delivery service.
            </li>
            <br />
            <li className="point">
              The donators are donating books to the receivers.
            </li>
            <br />
            <li className="point">
              Delivery service picks up books from donator’s location and
              delivers them to the receiver.
            </li>
            <br />
          </ul>
        </section>
        <section className="row row-2">
          <h1 className="title">Cost Structure</h1>
          <ul className="list">
            <li className="point">The main cost is deploying the platform</li>
            <br />
            <li className="point">
              The website and app hosting are variable costs, as they will
              increase with more users.
            </li>
            <br />
            <li className="point">
              The domain and servers are an expensive resource.
            </li>
            <br />
          </ul>
        </section>
        <section className="row row-full">
          <h1 className="title">Value Proposition</h1>
          <ul className="list">
            <li className="point">
              Atheneum connects students in need of books to students donating
              those books in a 10km radius
            </li>
            <br />
            <li className="point">
              Atheneum is completely anonymous and doesn’t show any information
              relating to any student to anybody else.
            </li>
            <br />
            <li className="point">
              Students buy books each year which results in a lot of paper being
              wasted. Atheneum reduces paper consumption, water consumption and
              deforestation of tress for paper. And also promotes re-using of
              paper.
            </li>
            <br />
            <li className="point">
              Many hard-working students require 3-4 books of the same subject
              which may not be affordable, Atheneum solves this problem
            </li>
            <br />
          </ul>
        </section>
        <section className="row column-1">
          <h1 className="title">Key Activities</h1>
          <ul className="list">
            <li className="point">
              The Key activity performed by Atheneum is delivering books to
              receivers in complete anonymity.
            </li>
            <br />
            <li className="point">
              Atheneum connects students in need of books to students donating
              those books in a 10km radius.
            </li>
            <br />
          </ul>
        </section>
        <section className="row column-2">
          <h1 className="title">Key Resources</h1>
          <ul className="list">
            <li className="point">
              Funding for platform deployment and hosting
            </li>
            <br />
            <li className="point">
              Donators, to register the books they are donating.
            </li>
            <br />
          </ul>
        </section>
        <section className="row column-full">
          <h1 className="title">Channels</h1>
          <ul className="list">
            <li className="point">
              Our platform will be delivered as an app and a website.
            </li>
            <br />
            <li className="point">
              After 2 students have decided to exchange books, we inform the
              donator and schedule a pick-up from their house through a
              3rd-party delivery service.
            </li>
            <br />
            <li className="point">
              There are 2 payment methods, either the donator can pay the
              delivery fee for the receiver or the receiver can bear the cost on
              his own.
            </li>
            <br />
            <li className="point">
              A delivery system is the most practical choice as we don’t want to
              connect students to strangers.
            </li>
            <br />
          </ul>
        </section>
        <section className="row column-1">
          <h1 className="title">Revenue Streams</h1>
          <ul className="list">
            <li className="point">
              Atheneum is a not-for-profit organization.
            </li>
            <br />
            <li className="point">
              Atheneum does not charge extra fee from users for delivering
              books.
            </li>
            <br />
            <li className="point">
              Funds from grants for not-for-profit organizations.
            </li>
            <br />
          </ul>
        </section>
        <section className="row column-2">
          <h1 className="title">Customer Segments</h1>
          <ul className="list">
            <li className="point">
              Customers of Atheneum are students who require or are donating
              books.
            </li>
            <br />
            <li className="point">
              Students would join our platform as they would easily be connected
              to other students donating the books they need in a 10km radius.
            </li>
            <br />
          </ul>
        </section>
        <section className="row column-full">
          <h1 className="title">Customer Relationships</h1>
          <ul className="list">
            <li className="point">
              We believe Atheneum will get customers as it satisfies a need of
              the students.
            </li>
            <br />
            <li className="point">
              Since this is also a green initiative, we believe environmental
              activists would also promote our platform.
            </li>
            <br />
            <li className="point">
              Many well-to-do families give away books as used paper; we believe
              many of them would be willing to donate books on our platform.
            </li>
            <br />
          </ul>
        </section>
      </section>
    </section>
  );
};

export default BusinessPlan;
