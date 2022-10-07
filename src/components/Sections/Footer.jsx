import React from "react";
import { Link } from "react-router-dom";

import FooterLogo from "../../assets/images/Logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container grid container">
          <div>
            <img src={FooterLogo} alt="Footer logo" className="footer__logo" />
            <br />
            <span className="footer__subtitle">Qassab Products</span>
          </div>

          <ul className="footer__links">
            <li>
              <Link to="/" className="footer__link">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer__link">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="footer__link">
                Contact
              </Link>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.facebook.com/profile.php?id=100080460057898"
              target="_blank"
              className="footer__social"
            >
              <i class="ri-facebook-fill"></i>
            </a>

            <a
              href="tel:+212622334707"
              target="_blank"
              className="footer__social"
            >
              <i class="ri-whatsapp-line"></i>
            </a>
          </div>
        </div>

        <p className="footer__copy">
          All rights reserved © 2022, Amine Elkhalidy.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
