import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container grid container">
          <div>
            <h1 className="footer__title">Rachid</h1>
            <span className="footer__subtitle">Business Man</span>
          </div>

          <ul className="footer__links">
            <li>
              <Link to="/products" className="footer__link">
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
            <a href="#" target="_blank" className="footer__social">
              <i class="ri-facebook-fill"></i>
            </a>

            <a href="#" target="_blank" className="footer__social">
              <i class="ri-whatsapp-line"></i>
            </a>

            <a href="#" target="_blank" className="footer__social">
              <i class="ri-instagram-line"></i>
            </a>
          </div>
        </div>

        <p className="footer__copy">All rights reserved © 2022, Amine Elkhalidy.</p>
      </div>
    </footer>
  );
};

export default Footer;
