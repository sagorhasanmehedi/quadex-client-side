import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Manageallorder.css";

const Manageallorder = () => {
  const [orders, setorders] = useState([]);
  const [condition, setcondition] = useState(true);

  // get all order
  useEffect(() => {
    axios
      .get("https://desolate-shelf-75033.herokuapp.com/allorders")
      .then((data) => setorders(data.data));
  }, [condition]);

  // delete order
  const deleteorder = (id) => {
    const procid = window.confirm("Are you sure you want to delete");
    if (procid) {
      axios
        .post(`https://desolate-shelf-75033.herokuapp.com/order/delete/${id}`)
        .then((data) => {
          setcondition(!condition);
        });
    }
  };

  // change status
  const updatestatus = (id) => {
    const status = "SHIPPED";
    axios
      .post(`https://desolate-shelf-75033.herokuapp.com/updatestatus/${id}`, {
        status,
      })
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          setcondition(!condition);
        }
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div
        style={{
          backgroundImage:
            "url(http://demoapus-wp.com/drone/home1/wp-content/uploads/2016/05/Img4-1.jpg)",
          minHeight: "250px",
          backgroundPosition: "center",
          marginBottom: "40px",
        }}
        className="dashbord-banner-all-page"
      >
        <h3 className="my-order-title">ALL ORDER</h3>
      </div>
      <Grid className="manage-order-grid" container rowSpacing={6}>
        {orders.map((order, index) => (
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
                image={order.image}
                alt="green iguana"
              />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 3,
                    mb: 3,
                  }}
                >
                  <Typography gutterBottom variant="h4" component="div">
                    {order.name}
                  </Typography>
                  <Box>
                    <Typography sx={{ fontSize: "20px", color: "tomato" }}>
                      $ {order.price}
                    </Typography>
                    <Typography
                      sx={{ color: "lightgray" }}
                      gutterBottom
                      variant="body1"
                      component="div"
                    >
                      {order.status}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {order.description}
                </Typography>
              </CardContent>
              <div className="manageorder-button-parent">
                <button
                  onClick={() => deleteorder(order._id)}
                  className="manageorder-button-delete"
                >
                  DELETE
                </button>
                <button
                  onClick={() => updatestatus(order._id)}
                  className="manageorder-button-shipped"
                >
                  SHIPPED
                </button>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Manageallorder;
