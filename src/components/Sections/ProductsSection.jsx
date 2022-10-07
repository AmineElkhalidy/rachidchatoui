import React from "react";

// MetaTags
import { Helmet } from "react-helmet";

const ProductsSection = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Discover our latest products that were made for ELQASSAB with the best quality..."
        />

        <title>Our Products</title>
      </Helmet>

      <section className="products section">
        <span className="section__subtitle">Discover</span>
        <h2 className="section__title">Our Products</h2>

        <div className="products__container container grid">
          <article className="product">
            <img
              src={""}
              alt="The product"
              className="product__img"
              width="100%"
              height="100%"
            />

            <div className="product__links">
              <div>
                <a href="tel:+212622334707" className="product__link">
                  <i class="ri-phone-line"></i>
                </a>

                <a href="https://wa.me/+212622334707" className="product__link">
                  <i class="ri-whatsapp-line"></i>
                </a>
              </div>
            </div>
          </article>

          <article className="product">
            <img src={""} alt="The product" className="product__img" />

            <div className="product__links">
              <div>
                <a href="tel:+212622334707" className="product__link">
                  <i class="ri-phone-line"></i>
                </a>

                <a href="https://wa.me/+212622334707" className="product__link">
                  <i class="ri-whatsapp-line"></i>
                </a>
              </div>
            </div>
          </article>

          <article className="product">
            <img src={""} alt="The product" className="product__img" />

            <div className="product__links">
              <div>
                <a href="tel:+212622334707" className="product__link">
                  <i class="ri-phone-line"></i>
                </a>

                <a href="https://wa.me/+212622334707" className="product__link">
                  <i class="ri-whatsapp-line"></i>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default ProductsSection;
