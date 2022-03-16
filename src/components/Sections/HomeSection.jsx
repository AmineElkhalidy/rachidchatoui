import React from "react";
import Footer from "./Footer";
import Amine from "../../assets/images/handsome-avatar.png";

const HomeSection = () => {
  return (
    <>
      <section className="home section"></section>
      <section className="project section">
        <div className="project__bg">
          <div className="project__container container grid">
            <div className="project__data">
              <h2 className="project__title">You have a new project ?</h2>
              <p className="project__description">
                Contact me, and I will handle the rest.
              </p>

              <a href="#" className="button button--flex button--white">
                Contact Me
                <i className="ri-send-plane-line project__icon button__icon"></i>
              </a>
            </div>

            <img src={Amine} alt="This will be my image" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomeSection;
