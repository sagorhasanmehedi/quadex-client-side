import React, { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import "./Detailpage.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import axios from "axios";
import Useauth from "../../Hook/Useauth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Shared/Footer/Footer";

const Detailpage = () => {
  const [product, setproduct] = useState([]);
  const { id } = useParams();
  const { user } = Useauth();

  // post user order
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const userinfo = {
      name: user.displayName,
      email: user.email,
      phonenumber: data.phonenumber,
      addres: data.addres,
    };
    const orderdetail = {
      name: product.name,
      image: product.image,
      price: product.price,
      description: product.description,
      status: "pending",
      email: user.email,
      userinfo,
    };

    axios
      .post("https://desolate-shelf-75033.herokuapp.com/order", { orderdetail })
      .then((data) => {
        if (data.data.insertedId) {
          toast.success("ORDER PLACED SUCCESSFULLY, ");
        }
      });
  };

  // get single product
  useEffect(() => {
    axios
      .get(`https://desolate-shelf-75033.herokuapp.com/product/${id}`)
      .then((data) => setproduct(data.data[0]));
  }, [id]);

  return (
    <>
      <ToastContainer />
      <div
        style={{
          backgroundImage:
            "url(http://demoapus-wp.com/drone/home1/wp-content/uploads/2016/05/Img2-1.jpg)",
          height: "460px",
        }}
        className="drons-banner"
      >
        <Header />
        <h2 className="drons-title">PRODUCT DETAIL</h2>
      </div>

      <div className="detal-info">
        <Container>
          <Box className="detail-card-box" sx={{ flexGrow: 1, my: 15 }}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <div className="product-section">
                  <img
                    className={"detain-img"}
                    src={product.image}
                    alt=""
                    srcset=""
                  />

                  <div className="text-section">
                    <h1 className="detail-name">{product.name}</h1>
                    <p style={{ color: "tomato" }} className="detail-price">
                      $ {product.price}
                    </p>
                    <p className="detail-details">{product.description}</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="purchase-form">
                  <h3 className="purchase-from-title">CONFIRM ORDER</h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      defaultValue={user.displayName}
                      className="purchase-input"
                      {...register("name")}
                    />{" "}
                    <br />
                    <input
                      defaultValue={user.email}
                      className="purchase-input"
                      {...register("email")}
                    />{" "}
                    <br />
                    <input
                      defaultValue="Phone Number..."
                      className="purchase-input"
                      {...register("phonenumber")}
                    />{" "}
                    <br />
                    <input
                      defaultValue="Addres..."
                      className="purchase-input"
                      {...register("addres")}
                    />
                    <div className="details-button-parent">
                      <button className="details-button" type="submit">
                        BYE NOW
                      </button>
                    </div>
                  </form>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Detailpage;
