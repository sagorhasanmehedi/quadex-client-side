import { Container, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Review.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";

const Review = () => {
  const [review, setreview] = useState([]);

  // get all review
  useEffect(() => {
    axios
      .get("https://desolate-shelf-75033.herokuapp.com/reviews")
      .then((data) => setreview(data.data));
  }, []);

  return (
    <div class="testimonials">
      <div class="testimonial-inner">
        <h1>Word form our clients</h1>
        <div class="border"></div>

        <div class="row">
          {review.map((REVIEW) => (
            <div class="col">
              <div class="testimonial">
                <div class="name">{REVIEW.name}</div>

                <p>{REVIEW.coment}</p>
                <div class="stars">
                  <Rating
                    sx={{ mt: 3 }}
                    name="read-only"
                    value={REVIEW.rating}
                    size="small"
                    readOnly
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
