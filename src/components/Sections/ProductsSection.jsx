import React from "react";

import Product0 from "../../assets/products/product-00.png";
import Product1 from "../../assets/products/product-01.png";
import Product2 from "../../assets/products/product-02.png";
import Product3 from "../../assets/products/product-03.png";
import Product4 from "../../assets/products/product-04.png";
import Product5 from "../../assets/products/product-05.png";
import Product6 from "../../assets/products/product-06.png";
import Product7 from "../../assets/products/product-07.png";
import Product8 from "../../assets/products/product-08.png";
import Product9 from "../../assets/products/product-09.png";
import Product10 from "../../assets/products/product-10.png";
import Product11 from "../../assets/products/product-11.png";
import Product12 from "../../assets/products/product-12.png";
import Product13 from "../../assets/products/product-13.png";
import Product14 from "../../assets/products/product-14.png";

const productImages = [
  Product0,
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
  Product8,
  Product9,
  Product10,
  Product11,
  Product12,
  Product13,
  Product14,
];

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

        <title>Our Natural Products</title>
      </Helmet>

      <section className="products section">
        <span className="section__subtitle">Discover</span>
        <h2 className="section__title">Our Products</h2>

        <div className="products__container container grid">
          {productImages.map((i, product) => {
            return (
              <article className="product">
                <img
                  src={product[i]}
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

                    <a
                      href="https://wa.me/+212622334707"
                      className="product__link"
                    >
                      <i class="ri-whatsapp-line"></i>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProductsSection;
