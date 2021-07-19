import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Atheneum_logo.png";

const HeaderSmall = () => {
  const inputRef = useRef(null);
  return (
    <header>
      <input
        ref={inputRef}
        class="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label for="menu-icon"></label>
      <nav class="nav">
        <ul
          class="pt-5"
          onClick={(e) => {
            if (e.target.classList.contains("item") && inputRef.current.checked)
              inputRef.current.checked = false;
          }}
        >
          <li id="item1">
            <Link to="/" class="logo">
              <img src={Logo} alt="Logo" class="item" />
            </Link>
          </li>
          <li id="item2">
            <Link to="/functionality" class="item">
              functionality
            </Link>
          </li>
          <li id="item3">
            <Link to="/Vision" class="item">
              Vision
            </Link>
          </li>
          <li id="item4">
            <Link to="/business-model" class="item">
              business model
            </Link>
          </li>
          <li id="item5">
            <Link to="/market-analysis" class="item">
              market Analysis
            </Link>
          </li>
          <li id="item6">
            <Link to="/founders" class="item">
              Founders
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderSmall;
