import React from "react";

import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="a clock" />
              <h3>Efficient</h3>
            </div>
            Lorem ipsum dolor sit amet.
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="a teamwork icon" />
              <h3>Teamwork</h3>
            </div>
            Lorem ipsum dolor sit amet.
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="a diaphram" />
              <h3>Diaphragm</h3>
            </div>
            Lorem ipsum dolor sit amet.
          </div>
          <div className="card">
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
            </div>
            Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="A big camera" />
      </div>
    </div>
  );
};

export default ServicesSection;
