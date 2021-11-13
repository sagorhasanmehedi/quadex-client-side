import React from "react";
import Header from "../Shared/Header/Header";
import "./Register.css";
import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import Useauth from "../../Hook/Useauth";
import Footer from "../Shared/Footer/Footer";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createaccount } = Useauth();

  const location = useLocation();
  const redirect_URL = location.state?.form || "/home";
  const history = useHistory();
  // react hook form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = ({ firstName, email, Password }) => {
    createaccount(firstName, email, Password, history, redirect_URL);
    reset();
  };

  return (
    <div
      className="register-parent"
      style={{
        backgroundImage:
          "url(http://demoapus-wp.com/drone/home1/wp-content/uploads/revslider/home1/slider2.jpg)",
        height: "103vh",
        backgroundPosition: "center",
      }}
    >
      <Header />

      <Helmet>
        <title>Quadex | Register</title>
      </Helmet>

      <div className="register-from">
        <div className="form">
          <div>
            {" "}
            <h1 className="register-title">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="First Name"
                className="input-field"
                {...register("firstName")}
                required
              />{" "}
              <br />
              <input
                placeholder="Last Name "
                className="input-field"
                {...register("lastname")}
              />{" "}
              <br />
              <input
                placeholder="Email"
                className="input-field"
                {...register("email")}
                required
              />{" "}
              <br />
              <input
                placeholder="Password"
                className="input-field"
                {...register("Password")}
                required
              />{" "}
              <br />
              <input
                placeholder="RE-Enter Password"
                className="input-field"
                {...register("reenterpassword")}
              />{" "}
              <br />
              <Typography
                sx={{
                  color: "white",
                  textAlign: "center",
                  marginBottom: "-18px",
                  marginTop: "20px",
                  fontSize: "15px",
                }}
              >
                ALREADY HAVE AN ACCOUNT?
                <NavLink
                  style={{ marginLeft: "9px", color: "white" }}
                  to="/login"
                >
                  LOG IN
                </NavLink>
              </Typography>
              <div className="form-button">
                <button type="submit" className="form-button-main">
                  REGISTER
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
