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

        <div className="products__container container grid"></div>
      </section>
    </>
  );
};

export default ProductsSection;
