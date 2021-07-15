import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./headerStyle.css";

const Header = () => {
  const headerRef = useRef(null);
  const scrollFunc = () => {
    let scrollBarPosition = window.pageYOffset | document.body.scrollTop;
    let windowPosition = scrollBarPosition > 50;
    headerRef.current.classList.toggle("scrolling-active", windowPosition);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);
  return (
    <header ref={headerRef} class="ui secondary pointing menu">
      <nav className="navLarge">
        <Link to="/" className="logo">
          <img src="" alt="Logo" />
        </Link>
        <div class="right menu">
          <Link to="/founders" class="item">
            Founders
          </Link>
          <Link to="/functionality" class="item">
            functionality
          </Link>
          <Link to="/business-plan" class="item">
            business plan
          </Link>
          <Link to="/Features" class="item">
            Features
          </Link>
          {/* <a class="item">Messages</a>
          <a class="item">Friends</a>
          <a class="item">Logout</a> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
