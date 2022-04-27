import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mjvlwowe");

  return (
    <section className="contact section">
      <h2 className="section__title">Contact us</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="ri-phone-line contact__icon"></i>

            <div>
              <h3 className="contact__title">Call us</h3>
              <span className="contact__subtitle">
                +212611154307 &rarr; Amine
              </span>{" "}
              <br />
              <span className="contact__subtitle">
                +212622334707 &rarr; Rachid
              </span>
            </div>
          </div>

          <div className="contact__information">
            <i className="ri-mail-line contact__icon"></i>

            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">
                elkhalidyamine.a@gmail.com
              </span>
            </div>
          </div>

          <div className="contact__information">
            <i className="ri-map-pin-line contact__icon"></i>

            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">
                Dr od khaled sidi aissa ben slimane - Elkelaa des sraghna
              </span>
            </div>
          </div>
        </div>

        <form
          action="https://formspree.io/f/mjvlwowe"
          method="POST"
          className="contact__form grid"
        >
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="name" className="contact__label">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="contact__input"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div lang="ar" className="contact__content">
              <label htmlFor="phoneNumber" className="contact__label">
                Phone number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                className="contact__input"
                required
              />
              <ValidationError
                prefix="Phone Number"
                field="phoneNumber"
                errors={state.errors}
              />
            </div>
          </div>

          <div className="contact__content">
            <label htmlFor="email" className="contact__label">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="contact__input"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="contact__content">
            <label htmlFor="message" className="contact__label">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="10"
              cols="0"
              type="text"
              className="contact__input"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div>
            <a
              className="button button--flex"
              type="submit"
              disabled={state.submitting}
            >
              Send message <i className="ri-send-plane-line button__icon"></i>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
