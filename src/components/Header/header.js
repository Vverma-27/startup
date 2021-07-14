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
      <Link to="/" className="logo">
        <img src="" alt="Logo" />
      </Link>
      <nav className="nav">
        <div class="right menu">
          <Link to="/founders" class="item">
            Founders
          </Link>
          <a class="item">Messages</a>
          <a class="item">Friends</a>
          <a class="ui item">Logout</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
