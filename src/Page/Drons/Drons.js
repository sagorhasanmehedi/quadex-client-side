import React, { useEffect, useState } from "react";
import "./Drons.css";
import Header from "../Shared/Header/Header";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Footer from "../Shared/Footer/Footer";
import axios from "axios";
import { useHistory } from "react-router";
import { Helmet } from "react-helmet";

const Drons = () => {
  const [product, setproduct] = useState([]);

  // get product
  useEffect(() => {
    axios
      .get("https://desolate-shelf-75033.herokuapp.com/products")
      .then((data) => setproduct(data.data));
  }, []);

  const history = useHistory();
  const handeldetails = (id) => {
    history.push(`/detailpage/${id}`);
    console.log(id);
  };

  return (
    <div>
      <Helmet>
        <title>Quadex | Explore</title>
      </Helmet>

      <div
        style={{
          backgroundImage:
            "url(http://demoapus-wp.com/drone/home1/wp-content/uploads/2016/05/Img4-1.jpg)",
          height: "460px",
        }}
        className="drons-banner"
      >
        <Header />
        <h2 className="drons-title">ALL PRODUCTS</h2>
      </div>

      <Container>
        <Box sx={{ flexGrow: 1, mb: 20, mt: 10 }}>
          <Grid container rowSpacing={7} spacing={3}>
            {product.map((DRON, index) => (
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
                    image={DRON.image}
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
                        {DRON.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          marginRight: "15px",
                          color: "tomato",
                        }}
                      >
                        $ {DRON.price}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {DRON.description}
                    </Typography>
                  </CardContent>
                  <div className="card-button-parent">
                    <button
                      onClick={() => handeldetails(DRON._id)}
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
      <Footer />
    </div>
  );
};

export default Drons;
