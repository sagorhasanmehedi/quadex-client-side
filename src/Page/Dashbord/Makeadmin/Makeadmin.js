import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logo from "../../../image/fingerprint.jpg";
import { TextField } from "@mui/material";
import "./Makeadmin.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Makeadmin = () => {
  const [email, setemail] = useState("");

  const adminemail = (e) => {
    setemail(e.target.value);
  };

  console.log(email);

  const handelsubmit = () => {
    fetch(
      `https://desolate-shelf-75033.herokuapp.com/makeadmin?email=${email}`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Add New Admin", {
            theme: "colored",
          });
        }
      });
  };
  return (
    <>
      <ToastContainer />
      <div
        style={{
          backgroundImage:
            "url(http://demoapus-wp.com/drone/home1/wp-content/uploads/2016/05/Img2-1.jpg)",
          minHeight: "250px",
          backgroundPosition: "center",
          marginBottom: "40px",
        }}
        className="dashbord-banner-all-page"
      >
        <h3 className="my-order-title">MAKE NEW ADMIN</h3>
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div
              style={{ marginTop: "35%", marginLeft: "15%" }}
              className="make-admin-form"
            >
              <TextField
                id="outlined-size-small"
                placeholder="New Admin Email"
                sx={{ width: "50%" }}
                className="makeadmin-textfield"
                onBlur={adminemail}
                required={true}
              />

              <button onClick={handelsubmit} className="makeadmin-button">
                SUBMIT
              </button>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="make-admin-logo">
              <img
                style={{ width: "71%", height: "auto" }}
                src={logo}
                alt=""
                srcset=""
                className="makeadmin-image"
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Makeadmin;
