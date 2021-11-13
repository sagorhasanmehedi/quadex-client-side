import React from "react";
import Header from "../../Shared/Header/Header";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="banner-parent"
      style={{
        backgroundImage: `url(https://i.ibb.co/Fxpcd6v/slider1.jpg)`,
        height: "100vh",
      }}
    >
      <Header />
      <div className="benner-text-parent">
        <h2 className="banner-text-text" href="0">
          Rip through the sky <span className="hide-text">with speed</span>
          <br />
          <span className="hide-text"> and </span> power control
        </h2>
      </div>
      <div className="banner-button">
        <div>
          <button className="banner-button-main">LEARN MORE</button>
          <button className="banner-button-main contuc-button">
            CONTUC US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
