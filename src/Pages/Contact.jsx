import styled from "styled-components";
import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <>
      <Wrapper>
        <h2 className="common-heading">Contact Page</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.61986299408!2d72.64559157517179!3d23.256916179010137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2c77c8ec3e55%3A0xccab1295bb101fa5!2sKH%207%20Dharm%20Cir%2C%20Kishan%20Nagar%2C%20Sector%2026%2C%20Gandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1707561849478!5m2!1sen!2sin"
          width="80%"
          height="450"
          style={{ border: "0px" }}
          allowFullScreen=""
          loading="lazy"
          title="home"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/xyyrerep"
              method="post"
              className="contact-inputs"
            >
              <input
                type="text"
                name="username"
                placeholder="Your username"
                required
                autoComplete="off"
              />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                autoComplete="off"
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Enter Your Message"
                required
                autoComplete="off"
              ></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Contact;
