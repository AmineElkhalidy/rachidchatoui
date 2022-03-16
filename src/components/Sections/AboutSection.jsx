import React from "react";
import AboutImage from "../../assets/images/handsome-avatar.png";
import PersonInfo from "../Reusable/PersonInfo";

const PERSONS = [
  {
    id: "P1",
    image: AboutImage,
    name: "Amine Elkhalidy",
    description:
      "Web developer with extensive knowledge and years of experience, working in web technologies and UI/UX design, delivering quality work.",
    experienceYears: "08",
    completedProjectsNumber: "20",
    companiesNumber: "05",
    linkToDocument: "",
  },
  {
    id: "P2",
    image: AboutImage,
    name: "Rachid Echatoui",
    description:
      "Web developer with extensive knowledge and years of experience, working in web technologies and UI/UX design, delivering quality work.",
    experienceYears: "08",
    completedProjectsNumber: "20",
    companiesNumber: "05",
    linkToDocument: "",
  },
];

const linkToPortfolio = "https://amineelkhalidy.netlify.app/";

const AboutSection = () => {
  return (
    <section className="about section">
      <h2 className="section__title">معلومات عنا</h2>
      <span className="section__subtitle">About Us</span>

      <div className="about__container container grid">
        {PERSONS.map((person) => (
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
        ))}
      </div>

      <p className="about__footer-description">
        (Portfolio) لمزيد من المعلومات عني, يمكنك زيارة موقعي التعريفي
        <br />
        <span className="about__portfolio-link">
          <a className="portfolio__link" target="_blank" href={linkToPortfolio}>
            {linkToPortfolio}
          </a>
        </span>
      </p>
    </section>
  );
};

export default AboutSection;
