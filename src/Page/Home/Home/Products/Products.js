import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./Products.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useHistory } from "react-router";

const Products = () => {
  const [products, setproduct] = useState([]);

  // get product
  useEffect(() => {
    axios
      .get("https://desolate-shelf-75033.herokuapp.com/products/limited")
      .then((data) => setproduct(data.data));
  }, []);

  const history = useHistory();
  const handelbyenow = (id) => {
    history.push(`/detailpage/${id}`);
  };

  return (
    <Container>
      <h3 className="product-title">ALL NEW PRODUCTS</h3>

      <Box sx={{ flexGrow: 1, mb: 20, mt: 10 }}>
        <Grid container rowSpacing={7} spacing={3}>
          {products.map((product, index) => (
            <Grid
              sx={{ display: "flex", justifyContent: "center" }}
              key={index}
              item
              md={4}
              xs={12}
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
                    <Typography sx={{ fontSize: "20px", color: "tomato" }}>
                      $ {product.price}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <div className="card-button-parent">
                  <button
                    onClick={() => handelbyenow(product._id)}
                    className="card-button"
                  >
                    BYE NOW
                  </button>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Products;
