import React from "react";

import { Link } from "react-router-dom";

import Amine from "../../assets/images/handsome-avatar.png";

import HeroImage from "../../assets/products/product-05.png";

import ClarificationImg from "../../assets/images/elqassab-01.jpg";

import RowImg1 from "../../assets/images/elqassab-02.jpg";
import RowImg2 from "../../assets/images/elqassab-03.jpg";
import RowImg3 from "../../assets/images/elqassab-04.jpg";

import Product1 from "../../assets/products/product-00.png";
import Product2 from "../../assets/products/product-01.png";
import Product3 from "../../assets/products/product-02.png";
import Product4 from "../../assets/products/product-03.png";

import StoryImg from "../../assets/images/elqassab-01.jpg";

import Footer from "./Footer";

const HomeSection = () => {
  return (
    <>
      <section className="home section">
        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__title">ELQASSAB Products</h1>
            <p className="home__description">
              R3A is the best place to choose from the best products that were
              made from ELQASSAB
            </p>

            <button className="button">Explore products</button>
          </div>

          <div className="home__image-container">
            <img src={HeroImage} alt="ELQASSAB Image" className="home__image" />
          </div>
        </div>
      </section>

      <section className="clarification section">
        <div className="clarification__container container grid">
          <div className="clarification__data">
            <h2 className="clarification__title">Arundo donaxi</h2>
            <p className="clarification__description">
              Arundo donaxi or ELQASSAB as we call it locally, It's a perennial
              herbal vegetarian species that belongs to the sex of the jungle,
              and it has two or three species, growing close to the watercourses
            </p>
          </div>

          <div className="clarification__images">
            <img
              src={ClarificationImg}
              alt="Image that show how elqassab looks"
              className="clarification__image"
            />
            <div className="clarification__row">
              <img src={RowImg1} alt="image 01" />
              <img src={RowImg2} alt="image 02" />
              <img src={RowImg3} alt="image 03" />
            </div>
          </div>
        </div>
      </section>

      <section className="featured__section section">
        <h2 className="section__title">Our Products</h2>
        <span className="section__subtitle">Discover</span>

        <div className="featured__container container grid">
          <article className="featured">
            <img
              src={Product4}
              alt="The first product"
              className="featured__img"
            />
            <span className="featured__name">Container</span>
            <span className="featured__price">$50</span>

            <a href="#" className="button button--white">
              Contact Us
            </a>
          </article>

          <article className="featured">
            <img
              src={Product3}
              alt="The first product"
              className="featured__img"
            />
            <span className="featured__name">Closet</span>
            <span className="featured__price">$50</span>

            <a href="#" className="button button--white">
              Contact Us
            </a>
          </article>

          <article className="featured">
            <img
              src={Product2}
              alt="The first product"
              className="featured__img"
            />
            <span className="featured__name">Table</span>
            <span className="featured__price">$50</span>

            <a href="#" className="button button--white">
              Contact Us
            </a>
          </article>

          <div className="featured__action">
            <Link to="products" className="button">
              Explore more
            </Link>
          </div>
        </div>
      </section>

      <section className="story section">
        <h2 className="section__title products__title">Our Story</h2>
        <span className="section__subtitle">Who we are</span>

        <div className="story__container container grid">
          <div className="story__data">
            <h2 className="story__title">What is RA3 ?</h2>
            <p className="story__description">
              We are starting startup, specialized in making whatever kind of
              products that can came out of ELQASSAB, We spent over 2 decades
              working with clients and we have also delivering service as well
            </p>
          </div>

          <img src={StoryImg} alt="Story image" className="story__img" />
        </div>
      </section>

      <section className="gallery section container">
        <h2 className="section__title products__title">Gallery</h2>
        <span className="section__subtitle">
          Stocks, truck and some of our employees images
        </span>

        <p className="gallery__description">
          The following is the images of our stocks, ELQASSAB as a raw material
          and our mean of delivery...
        </p>

        <div className="gallery__images grid">
          <img src="" alt="Gallery image" />
          <img src="" alt="Gallery image" />
          <img src="" alt="Gallery image" />
          <img src="" alt="Gallery image" />
          <img src="" alt="Gallery image" />
        </div>
      </section>

      <section className="team section">
        <h2 className="section__title products__title">Our Team</h2>
        <span className="section__subtitle">our team members</span>

        <div className="team__container container grid">
          <div className="member__card">
            <div className="member__image">
              <img src="" alt="member image" className="member__img" />
            </div>

            <div className="member__data">
              <h3 className="member__name">Rachid Echatoui</h3>
              <p className="member__role">The Bus</p>
            </div>
          </div>

          <div className="member__card">
            <div className="member__image">
              <img src="" alt="member image" className="member__img" />
            </div>

            <div className="member__data">
              <h3 className="member__name">Amine Elkhalidy</h3>
              <p className="member__role">Software developer</p>
            </div>
          </div>

          <div className="member__card">
            <div className="member__image">
              <img src="" alt="member image" className="member__img" />
            </div>

            <div className="member__data">
              <h3 className="member__name">Ahmed Elfahimy</h3>
              <p className="member__role">Bus assistant</p>
            </div>
          </div>

          <div className="member__card">
            <div className="member__image">
              <img src="" alt="member image" className="member__img" />
            </div>

            <div className="member__data">
              <h3 className="member__name">Ayoub Elfqih</h3>
              <p className="member__role">Bus assistant</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services section container">
        <h2 className="section__title">Our Services</h2>
        <span className="section__subtitle">Offering</span>

        <div className="services__container grid">
          <div className="services__content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="services__img"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05 5 4.604zM3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM12 13.5l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L12 6l1.47 2.977 3.285.478-2.377 2.318.56 3.272L12 13.5z" />
            </svg>
            <h3 className="services__title">Excellent Quality</h3>
            <p className="services__description">
              We offer the best products in terms of quality
            </p>
          </div>

          <div className="services__content">
            <svg
              className="services__img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" />
            </svg>
            <h3 className="services__title">Respect The Deadlines</h3>
            <p className="services__description">
              We offer the best products in terms of quality
            </p>
          </div>

          <div className="services__content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="services__img"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M8.965 18a3.5 3.5 0 0 1-6.93 0H1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h3l3 4.056V18h-2.035a3.5 3.5 0 0 1-6.93 0h-5.07zM15 7H3v8.05a3.5 3.5 0 0 1 5.663.95h5.674c.168-.353.393-.674.663-.95V7zm2 6h4v-.285L18.992 10H17v3zm.5 6a1.5 1.5 0 1 0 0-3.001 1.5 1.5 0 0 0 0 3.001zM7 17.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
            </svg>
            <h3 className="services__title">Delivery</h3>
            <p className="services__description">
              We offer the best products in terms of quality
            </p>
          </div>
        </div>
      </section>

      <section className="project section">
        <div className="project__bg">
          <div className="project__container container grid">
            <div className="project__data">
              <h2 className="project__title">You have a new project ?</h2>
              <p className="project__description">
                You want to build a website or a mobile application to let the
                world aware of what you offer, contact me and I will handle the
                rest.
              </p>

              <a href="#" className="button button--flex button--white">
                Contact Me
                <i className="ri-send-plane-line project__icon button__icon"></i>
              </a>
            </div>

            <img
              className="project__img"
              src={Amine}
              alt="Amine Elkhalidy Image"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomeSection;
