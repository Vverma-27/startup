import React from "react";
import { Link } from "react-router-dom";

const HeaderSmall = () => {
  return (
    <header>
      <input
        class="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label for="menu-icon"></label>
      <nav class="nav">
        <ul class="pt-5">
          <li>
            <Link to="/" className="logo">
              <img src="" alt="Logo" />
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
        </ul>
      </nav>
    </header>
  );
};

export default HeaderSmall;
