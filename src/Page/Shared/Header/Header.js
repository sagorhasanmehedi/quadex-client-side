import { Container, Typography } from "@mui/material";
import { color } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import Useauth from "../../../Hook/Useauth";
import "./Header.css";

const Header = () => {
  const { user, logout } = Useauth();

  return (
    <div>
      <Container>
        <div className="header-container">
          <div className="header-img">
            <img
              src={"https://themelooper.com/html/drona/images/logo.png"}
              alt=""
              srcset=""
            />
          </div>
          <div className="header-text-section">
            <NavLink style={{ textDecoration: "none" }} to="/">
              <a
                style={{ textTransform: "uppercase" }}
                href="0"
                className="header-a header-displayname"
              >
                {user.displayName}
              </a>
            </NavLink>
            {user.email && (
              <NavLink style={{ textDecoration: "none" }} to="/dashbord">
                <a href="0" className="header-a">
                  DASHBORD
                </a>
              </NavLink>
            )}
            <NavLink style={{ textDecoration: "none" }} to="/home">
              <a href="0" className="header-a">
                HOME
              </a>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/drons">
              <a href="0" className="header-a">
                EXPLORE
              </a>
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to="/">
              <a href="0" className="header-a header-blog">
                BLOG
              </a>
            </NavLink>

            {user.email ? (
              <button onClick={logout} className="header-button">
                LOG OUT
              </button>
            ) : (
              <NavLink to="/login">
                <button className="header-button">LOG IN</button>
              </NavLink>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
