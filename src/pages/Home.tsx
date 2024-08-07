import React from "react";
import "/src/styles/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import TypedJS from "../components/TypedJS";
import Button from "../components/Button";
import Header from "../components/Header";
import LineHead from "../components/LineHead";

const Home: React.FC = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  const categories = [
    "Designer",
    "Developer",
    "Lover",
    "Treasure",
    "Beauty",
    "Gift",
    "Darling",
  ];

  return (
    <div className="home-container">
      <div className="right-section">
        <Header />
        <div
          className="scrollable-container"
          style={{
            height: "auto",
            overflowY: "hidden",
            padding: "10px",
          }}
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="0"
        >
          <div className="home_block">
          <LineHead title="Home" />
            <div className="title_block">
              <h1 className="title">
                My name is Stephy.
                <br />
                I am a <br /> <TypedJS strings={categories} />
              </h1>
            </div>
            <div className="house">
              <div className="info-box-container">
                <div className="info-box">
                  <span className="info-number">7+</span>
                  <span className="info-text">Months of experience</span>
                </div>
                <div className="info-box">
                  <span className="info-number">1.5k+</span>
                  <span className="info-text">Hours of Waka Time</span>
                </div>
              </div>
              <div className="download-cv">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left-section1">
        <div className="close">
          <img src="/src/assets/50.png" alt="Me2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
