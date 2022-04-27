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

      <section className="products section">
        <h2 className="section__title products__title">Our Products</h2>
        <span className="section__subtitle">Discover</span>

        <div className="products__container container grid">
          <article className="product">
            <img
              src={Product4}
              alt="The first product"
              className="product__img"
            />
            <span className="product__name">Container</span>
            <span className="product__price">$50</span>

            <a href="#" className="button button--white">
              Contact Us
            </a>
          </article>

          <article className="product">
            <img
              src={Product3}
              alt="The first product"
              className="product__img"
            />
            <span className="product__name">Closet</span>
            <span className="product__price">$50</span>

            <a href="#" className="button button--white">
              Contact Us
            </a>
          </article>

          <article className="product">
            <img
              src={Product2}
              alt="The first product"
              className="product__img"
            />
            <span className="product__name">Table</span>
            <span className="product__price">$50</span>

            <a href="#" className="button button--white">
              Contact Us
            </a>
          </article>

          <div className="products__action">
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

      <section className="gallery section">
        <h2 className="section__title products__title">Gallery</h2>
        <span className="section__subtitle">
          Stocks, truck and some of our employees images
        </span>

        <div className="gallery__images grid">
          <img src="" alt="Gallery image" />
          <img src="" alt="Gallery image" />
          <img src="" alt="Gallery image" />
          <img src="" alt="Gallery image" />
          <img src="" alt="Gallery image" />
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
