import React from "react";

const MarketAnalysis = () => {
  return (
    <section id="common_container">
      <section
        className="analysis"
        style={{
          background: "#000",
          padding: "3rem",
          borderRadius: "1rem",
          border: "0.4rem solid #fff",
        }}
      >
        <h1 className="heading__analysis">Overview</h1>
        <p className="text__analysis">
          Atheneum is a not-for-profit startup in the education industry. It
          connects students in anonymity and allows students to get books from
          students in their 10km radius. It will partner with a third-party
          delivery company that will deliver books from the donator to the
          receiver.
        </p>
        <hr />
        <h1 className="heading__analysis">Target Market</h1>
        <p className="text__analysis">
          Atheneum caters to students in need of study books in any location. It
          will start off from India. Its key demographic are students in any
          educational institution at any point of study with income that is not
          sufficient to buy study books every year.
        </p>
        <hr />
        <h1 className="heading__analysis">Market Analysis</h1>
        <p className="text__analysis">
          The global online book services market size was valued at USD 17.7
          billion in 2019 and is expected to grow at a compound annual growth
          rate (CAGR) of 5.8% from 2020 to 2027. Increasing consumers’
          inclination towards reading books online or e-book rather than print
          one, coupled with the growing use of smartphones and tablets, is
          spawning more and more digital readers. This is expected to fuel the
          growth of the global market over the forecast period. In the past
          several years, digital readers or e-readers have gained popularity
          with a variety of consumers. Retirees who are looking forward to
          downsizing their homes and aiming to live a minimalist life to
          students who are tired of carrying around a backpack full of books are
          highly inclining towards online books, which offer the utmost
          convenient reading experience.
        </p>
        <hr />
        <h1 className="heading__analysis">Market Test Results</h1>
        <p className="text__analysis">
          We conducted a survey of random students and out of the 400 students
          who responded to our survey 87% of the students responded positively
          to donating books to underprivileged on our platform and 95% of
          students responded positively to finding 2nd hand books on our
          platform to reduce paper consumption and 100% of them responded
          negatively to have known about any platform like Atheneum.
        </p>
        <hr />
        <h1 className="heading__analysis">Conclusions And Recommendations</h1>
        <p className="text__analysis">
          Atheum’s presence in North India will be the first of its kind.
          Atheneum will deliver any preparation or study books to students in
          need of it in a 10km radius. It will also charge a low delivery fee to
          make it affordable for everyone.
        </p>
        <hr />
      </section>
    </section>
  );
};

export default MarketAnalysis;
