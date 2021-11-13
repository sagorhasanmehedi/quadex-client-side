import React, { useState } from "react";
import Header from "../Shared/Header/Header";
import "./Login.css";
import { useForm } from "react-hook-form";
import logo from "../../image/icons8-google-48.png";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { Grid, TextField, Typography } from "@mui/material";
import Useauth from "../../Hook/Useauth";
import { Box } from "@mui/system";
import { Helmet } from "react-helmet";

const Login = () => {
  const { googlelogin, passwordlogin } = Useauth();

  const location = useLocation();
  const redirect_URL = location.state?.from || "/home";
  const history = useHistory();
  // get user information
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = ({ email, Password }) => {
    passwordlogin(email, Password, history, redirect_URL);
    reset();
  };

  return (
    <div
      className="login-background-img"
      style={{
        backgroundImage:
          "url(http://demoapus-wp.com/drone/home1/wp-content/uploads/revslider/home1/slide_carousel_2_image.jpg)",
        height: "100vh",
        backgroundPosition: "center",
      }}
    >
      <Header />

      <Helmet>
        <title>Quadex | Log in</title>
      </Helmet>

      <div className="login-from">
        <div className="form-dev">
          <div>
            {" "}
            <h2 className="login-title">Log In</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="Email"
                className="login-input-field"
                {...register("email")}
                required
              />{" "}
              <br />
              <input
                placeholder="Password"
                className="login-input-field"
                {...register("Password")}
                required
              />{" "}
              <br />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "-18px",
                  marginTop: "70px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "15px",
                  }}
                >
                  FORGOT PASSWORD
                </Typography>
                <NavLink className="newuser-text" to="/register">
                  CREATE NEW ACCOUNT
                </NavLink>
              </Box>
              <div className="login-form-button">
                <button type="submit" className="loginform-button-main">
                  Log In
                </button>
              </div>
              <div className="login-form-button">
                <button
                  onClick={() => googlelogin(history, redirect_URL)}
                  className="form-button-login"
                >
                  <img src={logo} alt="" className="button-logo" /> Log In With
                  Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
