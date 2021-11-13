import { Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Testimonial.css";

const Testimonial = () => {
  const [review, setreview] = useState([]);
  useEffect(() => {
    axios
      .get("https://desolate-shelf-75033.herokuapp.com/reviews")
      .then((data) => setreview(data.data));
  }, []);

  console.log(review);
  return (
    <div class="testimonials">
      <div class="testimonial-inner">
        <h1>Testimonial</h1>
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

export default Testimonial;
