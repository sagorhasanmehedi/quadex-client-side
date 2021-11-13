import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div>
      <h2 className="intro-title">INTRODUCTION</h2>
      <div className="introduction-img">
        <img
          src={
            "http://demoapus-wp.com/drone/home1/wp-content/uploads/2016/01/singlebanner.jpg"
          }
          alt=""
          srcset=""
          className="intro-image"
        />
      </div>
      <div className="title-text">
        <h3 className="image-title">INTELLIGENT FLIGHT MODES</h3>
        <p className="intro-p">
          The DJI Inspire 1 Pro and Inspire 1 RAW are the smallest, easiest
          professional aerial filmmaking <br /> platforms the world. They
          combine DJI’s unparalleled leadership in aerial technology <br /> with
          world-class M4/3 imaging capabilities. Whether photographer .
        </p>

        <p className="intro-p-for-under-650">
          The DJI Inspire 1 Pro and Inspire 1 RAW are the smallest, easiest
          professional aerial filmmaking platforms the world. They combine DJI’s
          unparalleled leadership in aerial technology with world-class M4/3
          imaging capabilities. Whether photographer .
        </p>
      </div>
      <div className="intro-button">
        <button className="intro-contact">CONTACT US</button>
      </div>
    </div>
  );
};

export default Introduction;
