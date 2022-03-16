import React from "react";
import AboutImage from "../../assets/images/handsome-avatar.png";
import PersonInfo from "../Reusable/PersonInfo";

const PERSONS = [
  {
    id: 'P1',
    image: AboutImage,
    name: 'Amine Elkhalidy',
    description: 'Web developer with extensive knowledge and years of experience, working in web technologies and UI/UX design, delivering quality work.',
    experienceYears: '08',
    completedProjectsNumber: '20',
    companiesNumber: '05',
    linkToDocument: '',
  },
  {
    id: 'P2',
    image: AboutImage,
    name: 'Rachid Echatoui',
    description: 'Web developer with extensive knowledge and years of experience, working in web technologies and UI/UX design, delivering quality work.',
    experienceYears: '08',
    completedProjectsNumber: '20',
    companiesNumber: '05',
    linkToDocument: ''
  }
];

const linkToPortfolio = 'https://amine-elkhalidy-portfolio.netlify.app/';

const AboutSection = () => {
  return (
    <section className="about section">
      <h2 className="section__title">About Us</h2>
      <span className="section__subtitle">Our introduction</span>

      <div className="about__container container grid">
        {/* <img src={AboutImage} alt="About Image" className="about__img" />

        <div className="about__data">
          <p className="about__description">
            Web developer with extensive knowledge and years of experience,
            working in web technologies and UI/UX design, delivering quality
            work.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">08+</span>
              <span className="about__info-name">
                Years <br />
                experience
              </span>
            </div>

            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                Completed <br /> project
              </span>
            </div>

            <div>
              <span className="about__info-title">05+</span>
              <span className="about__info-name">
                Companies <br />
                worked
              </span>
            </div>
          </div>

          <div className="about__buttons">
            <a className="button button--flex" download="" href="#">
              Download CV <i class="ri-download-line button__icon"></i>
            </a>
          </div>
        </div> */}
        {PERSONS.map((person) => (
          <PersonInfo key={person.id} image={person.image} name={person.name} description={person.description} experienceYears={person.experienceYears} completedProjectsNumber={person.completedProjectsNumber} companiesNumber={person.companiesNumber} linkToPortfolio={person.linkToPortfolio} />
        ))}
      </div>

      <p className="about__footer-description">For more information about me, do not hesitate to visit my portfolio:<br /> <span className="about__portfolio-link"><a className="portfolio__link" target="_blank" href={linkToPortfolio}>{linkToPortfolio}</a></span></p>
    </section>
  );
};

export default AboutSection;
