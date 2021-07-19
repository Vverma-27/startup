import React, { useRef, useEffect } from "react";
import Picture1 from "../../images/picture1.webp";
import Picture2 from "../../images/picture2.webp";
import Picture3 from "../../images/picture3.webp";
import Picture4 from "../../images/picture4.webp";
import "./homeStyle.css";

const Home = () => {
  const slideRef1 = useRef(null),
    slideRef2 = useRef(null),
    slideRef3 = useRef(null),
    slideRef4 = useRef(null),
    dotRef1 = useRef(null),
    dotRef2 = useRef(null),
    dotRef3 = useRef(null),
    dotRef4 = useRef(null),
    counterRef1 = useRef(null),
    counterRef2 = useRef(null),
    counterRef3 = useRef(null);
  const counters = [counterRef1, counterRef2, counterRef3];
  const speed = 500; // The lower the faster

  const slides = [slideRef1, slideRef2, slideRef3, slideRef4];
  const dots = [dotRef1, dotRef2, dotRef3, dotRef4];
  let slideIndex = 1;
  useEffect(() => {
    // console.log(slides, dots);
    showSlides(slideIndex);
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = parseInt(
          counter.current.getAttribute("data-target"),
          10
        );
        const count = parseInt(counter.current.innerText, 10);

        // Lower inc to slow and higher to slow
        const inc = target / speed;

        // console.log(inc);
        // console.log(count);

        // Check if target is reached

        if (count < target) {
          // Add inc to count and output in counter
          counter.current.innerText = count + inc;
          // Call function every ms
          // updateCount();
          setTimeout(updateCount, 1);
        } else {
          counter.current.innerText = target;
        }
      };

      updateCount();
    });
    // const id = setInterval(() => plusSlides(1), 4000);
    // return () => {
    //   clearInterval(id);
    // };
  }, []);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].current.classList.remove("slideActive");
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].current.classList.remove("active");
    }
    slides[slideIndex - 1].current.classList.add("slideActive");
    dots[slideIndex - 1].current.classList.add("active");
  }
  return (
    <section id="home_page">
      <section id="bg-image"></section>
      <section
        style={{ height: "100vh", position: "relative", padding: "1rem" }}
      >
        <section class="para">
          <span class="header">Atheneum</span>
          <br />
          <span class="text">
            Atheneum is a not-for-profit startup in the education industry. It
            connects students in anonymity. It allows students to get books from
            other students in a 10km radius. It will partner with a third-party
            delivery company that will deliver books from the donator to the
            receiver.Atheneum’s presence in North India will be the first of its
            kind. Atheneum will deliver any preparation or study books to
            students in need of it in a 10km radius. It will also charge a low
            delivery fee to make it affordable for everyone.
          </span>
        </section>
      </section>
      <section class="slideshow-container" style={{ padding: "1rem" }}>
        <section ref={slideRef1} class="mySlides fade">
          <section class="numbertext">1 / 4</section>
          <img src={Picture1} style={{ width: "100%", height: "100%" }} />
          <section class="captiontext">Lorem Ipsum Dolor Set</section>
        </section>
        <section ref={slideRef2} class="mySlides fade">
          <section class="numbertext">2 / 4</section>
          <img src={Picture2} style={{ width: "100%", height: "100%" }} />
          <section class="captiontext">Lorem Ipsum Dolor Set</section>
        </section>
        <section ref={slideRef3} class="mySlides fade">
          <section class="numbertext">3 / 4</section>
          <img src={Picture3} style={{ width: "100%", height: "100%" }} />
          <section class="captiontext">Lorem Ipsum Dolor Set</section>
        </section>

        <section ref={slideRef4} class="mySlides fade">
          <section class="numbertext">4 / 4</section>
          <img src={Picture4} style={{ width: "100%", height: "100%" }} />
          <section class="captiontext">Lorem Ipsum Dolor Set</section>
        </section>

        <a class="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a class="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
        <br />
        <section style={{ textAlign: "center" }}>
          <span
            ref={dotRef1}
            class="dot"
            onClick={() => currentSlide(1)}
          ></span>
          <span
            ref={dotRef2}
            class="dot"
            onClick={() => currentSlide(2)}
          ></span>
          <span
            ref={dotRef3}
            class="dot"
            onClick={() => currentSlide(3)}
          ></span>
          <span
            ref={dotRef4}
            class="dot"
            onClick={() => currentSlide(4)}
          ></span>
        </section>
      </section>
      <section class="counters">
        <section>
          <i class="tree icon huge"></i>
          <section ref={counterRef1} class="counter" data-target="7000000000">
            0
          </section>
          <h3>Trees Cut</h3>
          <h4>7 Billion</h4>
        </section>
        <section>
          <i class="tint icon huge"></i>
          <section ref={counterRef2} class="counter" data-target="125000000000">
            0
          </section>
          <h3>Water Wasted</h3>
          <h4>125 Billion Litres</h4>
        </section>
        <section>
          <i class="book icon huge"></i>
          <section ref={counterRef3} class="counter" data-target="55000000">
            0
          </section>
          <h3>Books Wasted</h3>
          <h4>55 Million</h4>
        </section>
      </section>
    </section>
  );
};

export default Home;
