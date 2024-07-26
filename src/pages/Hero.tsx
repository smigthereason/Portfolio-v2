import React from "react";
import "/src/styles/Hero.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="hero-container">
      <div className="left-section">
        <img src="/src/assets/06.png" alt="Me" />
      </div>
      <div className="right-section">
        <video autoPlay muted loop className="background-video">
          <source src="/src/assets/edium.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="top-nav1">
          {/* <button className="subscribe-btn">Subscribe</button> */}
          {/* <div className="social-icons">
            <a
              href="https://www.facebook.com/victor.maina.77312/"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/smigthereason/"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>

            <a
              href="https://x.com/SmigDs"
              target="_blank"
              rel="noopener noreferrer">
              <FaXTwitter size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/victor-maina-389318301/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:victor.dmaina@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              <MdEmail size={24} />
            </a>
          </div> */}
        </div>
        <div className="content-section">
          <div className="vertical-links">
            <Link
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay="0"
              to="/home"
            >
              Home
            </Link>
            <Link
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay="0"
              to="/about"
            >
              About
            </Link>
            <Link
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay="0"
              to="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay="0"
              to="/contact"
            >
              Contact
            </Link>
          </div>
          <div
            className="other-content"
            data-aos="fade-in"
            data-aos-duration="3000"
            data-aos-delay="1000"
          >
            <p>P.O.Box 25773-00100 NBI,GPO</p>
            <p>
              <a href="mailto:victor.dmaina@gmail.com">
                victor.dmaina@gmail.com
              </a>
            </p>
            <p>
              <a href="mailto:prodbysmig@gmail.com">prodbysmig@gmail.com</a>
            </p>
            <p>+254 707 098723</p>
            <p>+254 704 542321</p>
          </div>
        </div>
        <div className="tag-1">
          <h2>
            Victor Maina <FaRegCopyright /> 2024{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
