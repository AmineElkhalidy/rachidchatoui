import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

const Header = () => {
  useEffect(() => {
    showMenu();
    removeMenu();
    themeChanger();
  }, []);

  const showMenu = () => {
    const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }
  };

  const removeMenu = () => {
    const navLink = document.querySelectorAll(".nav__link");

    function linkAction() {
      const navMenu = document.getElementById("nav-menu");
      // When we click on each nav__link, we remove the show-menu class
      navMenu.classList.remove("show-menu");
    }
    navLink.forEach((n) => n.addEventListener("click", linkAction));
  };

  const themeChanger = () => {
    const themeButton = document.getElementById("theme-button");
    const darkTheme = "dark-theme";
    const iconTheme = "ri-sun-line";

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? "dark" : "light";
    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme)
        ? "ri-moon-line"
        : "ri-sun-line";

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
        iconTheme
      );
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener("click", () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      // We save the theme and the current icon that the user chose
      localStorage.setItem("selected-theme", getCurrentTheme());
      localStorage.setItem("selected-icon", getCurrentIcon());
    });
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <img src={Logo} alt="Logo Image" /> Qassab
        </Link>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <i className="ri-shopping-cart-2-line nav__icon"></i> Products
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/about" className="nav__link">
                <i className="ri-user-line nav__icon"></i> About
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                <i className="ri-send-plane-line nav__icon"></i> Contact
              </Link>
            </li>
          </ul>

          <i className="ri-close-line nav__close" id="nav-close"></i>
        </div>

        <div className="nav__btns">
          <i class="ri-moon-line change-theme" id="theme-button"></i>
          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-function-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
