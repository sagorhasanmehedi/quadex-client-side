import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import img from "../../image/2488754-ai.png";
import "./Pagenotfound.css";

const Pagenotfound = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Helmet>
        <title>Quadex | Error</title>
      </Helmet>
      <NavLink to="/home">
        <button className="notfound-button">GO BACK</button>
      </NavLink>
    </div>
  );
};

export default Pagenotfound;
