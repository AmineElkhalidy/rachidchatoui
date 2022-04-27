import React from "react";

const PersonInfo = ({
  image,
  description,
  name,
  experienceYears,
  companiesNumber,
  completedProjectsNumber,
  linkToDocument,
  linkToPortfolio,
}) => {
  return (
    <div className="about__info-wrapper grid">
      <img src={image} alt="About Image" className="about__img" />

      <div className="about__data">
        <h3 className="about__name">{name}</h3>
        <p className="about__description">{description}</p>

        <div className="about__info">
          <div>
            <span className="about__info-title">{experienceYears}+</span>
            <span className="about__info-name">
              Years <br />
              experience
            </span>
          </div>

          <div>
            <span className="about__info-title">
              {completedProjectsNumber}+
            </span>
            <span className="about__info-name">
              Completed <br /> project
            </span>
          </div>

          <div>
            <span className="about__info-title">{companiesNumber}+</span>
            <span className="about__info-name">
              Companies <br />
              worked
            </span>
          </div>
        </div>

        {/* <div className="about__buttons">
          <a className="button button--flex" download="" href={linkToDocument}>
            Download CV <i className="ri-download-line button__icon"></i>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default PersonInfo;
