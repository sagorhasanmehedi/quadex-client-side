import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Manageorder.css";

const Manageproducts = () => {
  const [products, setproducts] = useState([]);
  const [isdelete, setisdelete] = useState(true);

  // get all product
  useEffect(() => {
    axios
      .get("https://desolate-shelf-75033.herokuapp.com/products")
      .then((data) => setproducts(data.data));
  }, [isdelete]);

  // delete product
  const deleteproduct = (id) => {
    const procid = window.confirm("Are You Sure Want To Delete");
    if (procid) {
      axios
        .delete(
          `https://desolate-shelf-75033.herokuapp.com/product/delete/${id}`
        )
        .then((data) => {
          if (data.status === 200) {
            setisdelete(!isdelete);
          }
        });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
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
        <h3 className="my-order-title">ALL PRODUCTS</h3>
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
                  <Typography
                    sx={{
                      fontSize: "20px",
                      marginRight: "15px",
                      color: "tomato",
                    }}
                  >
                    $ {product.price}
                  </Typography>
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

export default Manageproducts;
