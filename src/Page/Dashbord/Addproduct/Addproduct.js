import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../../../image/acount.jpg";
import "./Addproduct.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addproduct = () => {
  const [product, setproduct] = useState({});

  const handelinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const restdata = { ...product };
    restdata[name] = value;
    setproduct(restdata);
  };

  const handelsubmit = () => {
    axios
      .post("https://desolate-shelf-75033.herokuapp.com/product/newadd", {
        product,
      })
      .then((data) => {
        if (data.data.insertedId) {
          toast.success(" ADD SUCCESSFUL   ");
        }
      });
  };

  return (
    <>
      <ToastContainer />
      <div
        style={{
          backgroundImage:
            "url(http://demoapus-wp.com/drone/home1/wp-content/uploads/revslider/slider_2/Over.jpg)",
          minHeight: "250px",

          marginBottom: "40px",
        }}
        className="dashbord-banner-all-page"
      >
        <h3 className="my-order-title">ADD NEW PRODUCTS</h3>
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="addproduct-parent">
              <TextField
                id="outlined-size-small"
                placeholder="Product Name"
                sx={{ width: "70%", mb: 3 }}
                name="name"
                onBlur={handelinput}
                className="add-new-textfield"
              />{" "}
              <br />
              <TextField
                id="outlined-size-small"
                placeholder="Image"
                sx={{ width: "70%", mb: 3 }}
                name="image"
                onBlur={handelinput}
                className="add-new-textfield"
              />{" "}
              <br />
              <TextField
                id="outlined-size-small"
                placeholder="Description"
                sx={{ width: "70%", mb: 3 }}
                name="description"
                onBlur={handelinput}
                className="add-new-textfield"
              />{" "}
              <br />
              <TextField
                id="outlined-size-small"
                placeholder="Price"
                sx={{ width: "70%", mb: 3 }}
                name="price"
                onBlur={handelinput}
                className="add-new-textfield"
              />{" "}
              <br />
              <button onClick={handelsubmit} className="addproduct-button">
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
                className="addproduct-image"
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Addproduct;
