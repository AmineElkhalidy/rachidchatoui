import React from "react";

// MetaTags
import { Helmet } from "react-helmet";

const AboutSection = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Get to know about our store, team and services..."
        />

        <title>About Us</title>
      </Helmet>

      <section className="about section">
        <span className="section__subtitle">About Us</span>
        <h2 className="section__title">Get to know</h2>

        <div className="about__container container grid">
          <div className="story__container grid">
            <div className="story__data">
              <h2 className="story__title">What is RA3 ?</h2>
              <p className="story__description">
                We are starting startup, specialized in making whatever kind of
                products that can came out of ELQASSAB, We spent over 2 decades
                working with clients and we have also delivering service as well
              </p>
            </div>

            <img src={""} alt="Story image" className="story__img" />
          </div>

          <div className="services section">
            <span className="section__subtitle">Offering</span>
            <h2 className="section__title">Our Services</h2>

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
          </div>

          <section className="team section">
            <span className="section__subtitle">Presenting</span>
            <h2 className="section__title products__title">Our team members</h2>

            <div className="team__container grid">
              <div className="member__card">
                <div className="member__image">
                  <img src="" alt="member image" className="member__img" />
                </div>

                <div className="member__data">
                  <h3 className="member__name">Rachid Echatoui</h3>
                  <p className="member__role">The Boss</p>
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
                  <p className="member__role">Boss assistant</p>
                </div>
              </div>

              <div className="member__card">
                <div className="member__image">
                  <img src="" alt="member image" className="member__img" />
                </div>

                <div className="member__data">
                  <h3 className="member__name">Ayoub Elfqih</h3>
                  <p className="member__role">Boss assistant</p>
                </div>
              </div>
            </div>
          </section>
          {/* {PERSONS.map((person) => (
          <PersonInfo
            key={person.id}
            image={person.image}
            name={person.name}
            description={person.description}
            experienceYears={person.experienceYears}
            completedProjectsNumber={person.completedProjectsNumber}
            companiesNumber={person.companiesNumber}
            linkToPortfolio={person.linkToPortfolio}
          />
        ))} */}
        </div>
      </section>
    </>
  );
};

export default AboutSection;
