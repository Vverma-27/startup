import React from "react";
import Ui from "../../images/UI_Atheneum.webp";
import book from "../../images/Book_img_1.jpg";
import "./functionalityStyle.css";

const Functionality = () => {
  return (
    <section id="common_container">
      <section id="heading">
        <section id="pageTitle">Functionality Of Atheneum</section>
      </section>
      <section
        className="functionality"
        style={{
          background: "#000",
          padding: "3rem",
          borderRadius: "1rem",
          border: "0.4rem solid #fff",
        }}
      >
        <section className="content">
          <h3>
            “Any sufficiently advanced technology is indistinguishable from
            magic.”
          </h3>
          <p>
            With deep love for technology and a robust belief that technology
            can solve real world problems, the founders of Atheneum have decided
            to build an online platform where philanthropic donors and readers
            can come in one place.
          </p>
          <ul class="a">
            <li>
              The platform will allow readers to search through a wide array of
              approved books (committed to be given by our donors) and even
              request for books on the announcement forum. The{" "}
              <b>books will be free</b> for the receiver and, they only need to
              pay a nominal delivery charge (₹ 20 - ₹50).
            </li>
            <li>
              Our book receivers will be able to look for available books in a
              10 Km radius first and, if a user is unable to find the books they
              need, in a 10 Km radius, the platform will also have an option to
              search outside the given radius (with slightly higher delivery
              charges).
            </li>
            <li>
              The donors will have to give a self-declaration, ensuring the
              quality of their books (as per certain guidelines) along with 3-4
              photos of the books. An automated Artificial Intelligence program
              will verify the images and give its own ratings for the condition
              of the books.
            </li>
            <section style={{ width: "100%" }}>
              <li>
                If book receivers are afraid to pay the delivery charges
                anticipating that they will be cheated upon, Atheneum will also
                have a provision for Cash-On-Delivery.
              </li>
              <li>
                Atheneum will also ensure that the donors are in for a special
                treat. Apart from a hall-of-fame for our generous donors, each
                donor will be given 200 Atheneum Points for each book they
                donate. These points can be redeemed at our GoodWill store in
                the application itself, offering various items, subscriptions to
                OTT apps and even a membership to
                <h6>Atheneum Gold.</h6>
              </li>
              <li>
                Atheneum will also offer a prime membership called “Atheneum
                Gold” which will have the following perks:
                <ul class="b">
                  <li>
                    Free Delivery on all orders (even outside 10 Km radius)
                  </li>
                  <li>
                    All-India Orders (members can order from anywhere in India
                    but, outside 500 km, only two orders would be allowed
                    monthly)
                  </li>
                  <li>Priority Requests on the Announcements Forum</li>
                </ul>
              </li>
              <li>
                Most part of the fee of Atheneum Gold would go into making the
                delivery fee lower or, even removing it for the rest of our
                users.
              </li>
              <li>
                Our users can search for books through the Title, Author Name,
                ISBN, or Publication.
              </li>
              <li>
                Several well-defined categories of books and several filters to
                narrow down searches will assist in the functioning of
                Antheneum’s online platform.
              </li>
              <li>
                Other than that, users will also get an opportunity to view the
                books available in their area on a map which will give 10 Km
                radius view (can be increased further).
              </li>
              <li>
                For the delivery of books, Atheneum will partner with delivery
                companies to ensure a smooth system of donating and receiving.
              </li>
              <li>
                An additional provision in Atheneum will be for
                ultra-philanthropists, that they can also pay for the delivery
                charges along with donating their books, if they wish to. It
                will help the book receivers to further get their books at
                reduced or, even no delivery charges.
              </li>
              <li>
                The donor’s and the receiver’s identity will remain confidential
                and, the whole process will happen in complete anonymity. The
                donor’s details will only be shown only, in the hall-of-fame of
                generous donors, upon their confirmation.
              </li>
            </section>
          </ul>
        </section>
        <section
          className="images"
          style={{
            width: "45vw",
          }}
        >
          <img
            src={Ui}
            alt="UI Image"
            style={{ width: "100%", marginBottom: "8rem" }}
          />
          <img src={book} alt="UI Image" style={{ width: "100%" }} />
        </section>
      </section>
    </section>
  );
};

export default Functionality;
