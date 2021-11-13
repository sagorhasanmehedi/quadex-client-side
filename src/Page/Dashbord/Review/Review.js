import React, { useState } from "react";
import "./Review.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import logo from "../../../image/fidback.jpg";
import { TextField } from "@mui/material";
import Useauth from "../../../Hook/Useauth";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Review = () => {
  const [review, setreview] = useState({});
  const { user } = Useauth();

  const handelinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const restdata = { ...review };
    restdata[name] = value;
    setreview(restdata);
  };

  const handelsubmit = () => {
    const fullreview = {
      name: user.displayName,
      email: user.email,
      rating: review.rating,
      coment: review.coment,
    };
    axios
      .post("https://desolate-shelf-75033.herokuapp.com/review", { fullreview })
      .then((data) => {
        if (data.data.insertedId) {
          toast.success(" Thanks for taking the time to post this! ");
        }
      });
  };

  return (
    <>
      <ToastContainer />

      <div
        style={{
          backgroundImage:
            "url(http://demoapus-wp.com/drone/home1/wp-content/uploads/2016/05/bg-breadcrum.jpg)",
          height: "250px",
        }}
        className="review-banner"
      >
        <h2 className="my-order-title">REVIEW US</h2>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            sx={{ display: "flex", justifyContent: "center" }}
            item
            md={6}
            xs={12}
          >
            <div className="text-field">
              <TextField
                className="input-FIELD"
                id="outlined-size-small"
                value={user.displayName}
                sx={{ mb: 3 }}
              />{" "}
              <br />
              <TextField
                className="input-FIELD"
                id="outlined-size-small"
                value={user.email}
                sx={{ mb: 3 }}
              />{" "}
              <br />
              <TextField
                className="input-FIELD"
                id="outlined-size-small"
                label="Rating Number Between   0-5"
                sx={{ mb: 3 }}
                name="rating"
                onBlur={handelinput}
              />{" "}
              <br />
              <textarea
                className="textAREA"
                id=""
                cols="47"
                rows="7"
                defaultValue="Comments"
                name="coment"
                onBlur={handelinput}
              ></textarea>{" "}
              <br />
              <button onClick={handelsubmit} className="review-button">
                SUBMIT
              </button>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <img
              className="review-image"
              style={{ width: "69%" }}
              src={logo}
              alt=""
              srcset=""
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Review;
