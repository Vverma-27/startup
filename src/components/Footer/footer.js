import React from "react";
import "./footerStyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__information">
        <h2>-V1.1</h2>
        <i class="copyright icon big"></i>
      </div>
      <div className="footer__icons">
        <a href="https://github.com/Atheneum-Innovatrix" target="_target">
          <i className="github icon big"></i>
        </a>
        <i className="instagram icon big"></i>
        <i className="envelope icon big"></i>
        <i className="twitter icon big"></i>
      </div>
    </footer>
  );
};

export default Footer;
