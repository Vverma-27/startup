import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Atheneum_logo.png";
import "./headerStyle.css";

const Header = () => {
  return (
    <header class="ui secondary pointing menu">
      <nav className="navLarge">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" height="20px" />
        </Link>
        <div class="right menu">
          <Link to="/functionality" class="item">
            functionality
          </Link>
          <Link to="/Vision" class="item">
            Vision
          </Link>
          <Link to="/business-model" class="item">
            business model
          </Link>
          <Link to="/market-analysis" class="item">
            market Analysis
          </Link>
          <Link to="/founders" class="item">
            Founders
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
