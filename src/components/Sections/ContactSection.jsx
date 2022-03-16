import React from "react";
import { useForm, ValidationError } from "@formspree/react";
const ContactSection = () => {
  const [state, handleSubmit] = useForm("mjvlwowe");
  return (
    <section className="contact section">
      <h2 className="section__title">Contact Us</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="ri-phone-line contact__icon"></i>

            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">+212611154307</span>
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
                Sidi Aissa Ben Slimane - Elkelaa Des Sraghna
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
                Name
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

            <div className="contact__content">
              <label htmlFor="phoneNumber" className="contact__label">
                Phone
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
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="contact__input"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="contact__content">
            <label htmlFor="message" className="contact__label">
              Message
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
              href="#"
              className="button button--flex"
              type="submit"
              disabled={state.submitting}
            >
              Send Message <i className="ri-send-plane-line button__icon"></i>
            </a>
          </div>

          {/* <button
            className="button button--flex"
            type="submit"
            disabled={state.submitting}
          >
            Send Message <i className="ri-send-plane-line button__icon"></i>
          </button> */}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
