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
          <li>
            <Link to="/" class="logo">
              <img src={Logo} alt="Logo" class="item" />
            </Link>
          </li>
          <li>
            <Link to="/founders" class="item">
              Founders
            </Link>
          </li>
          <li>
            <Link to="/functionality" class="item">
              functionality
            </Link>
          </li>
          <li>
            <Link to="/business-plan" class="item">
              business plan
            </Link>
          </li>
          <li>
            <Link to="/Features" class="item">
              Features
            </Link>
          </li>
          <li>
            <Link to="/customer-analysis" class="item">
              Customer Analysis
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderSmall;
