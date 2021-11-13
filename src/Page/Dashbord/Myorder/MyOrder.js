import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./Myorder.css";
import Useauth from "../../../Hook/Useauth";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyOrder = () => {
  const { user } = Useauth();
  const [products, setproducts] = useState([]);
  const [isdelete, setisdelete] = useState(true);

  // get user order
  useEffect(() => {
    axios
      .get(
        `https://desolate-shelf-75033.herokuapp.com/order?email=${user.email}`
      )
      .then((data) => setproducts(data.data));
  }, [user, isdelete]);

  // delete order
  const deleteproduct = (id) => {
    const procide = window.confirm("Are you sure you want to delete");
    if (procide) {
      axios
        .post(`https://desolate-shelf-75033.herokuapp.com/order/delete/${id}`)
        .then((data) => {
          if (data.data.deletedCount > 0) {
            setisdelete(!isdelete);
          }
        });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ToastContainer />
      <div
        style={{
          backgroundImage:
            "url(http://demoapus-wp.com/drone/home1/wp-content/uploads/2016/05/img3.jpg)",
          minHeight: "250px",
          backgroundPosition: "center",
          marginBottom: "40px",
        }}
        className="dashbord-banner-all-page"
      >
        <h3 className="my-order-title">YOUR ALL ORDER</h3>
      </div>
      <Grid className="manage-order-grid" container rowSpacing={6}>
        {products.map((product, index) => (
          <Grid
            sx={{ display: "flex", justifyContent: "center" }}
            key={index}
            item
            xs={12}
            md={3}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="240"
                image={product.image}
                alt="green iguana"
              />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 3,
                    mb: 1,
                  }}
                >
                  <Typography gutterBottom variant="h4" component="div">
                    {product.name}
                  </Typography>
                  <Box>
                    <Typography sx={{ fontSize: "20px", color: "tomato" }}>
                      $ {product.price}
                    </Typography>
                    <Typography
                      sx={{ color: "lightgray" }}
                      gutterBottom
                      variant="body1"
                      component="div"
                    >
                      {product.status}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <div className="card-button-parent">
                <button
                  onClick={() => deleteproduct(product._id)}
                  className="manageorder-button-delete"
                >
                  DELETE
                </button>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyOrder;
