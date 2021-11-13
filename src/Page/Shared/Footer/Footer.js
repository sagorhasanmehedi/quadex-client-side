import React from "react";
import "./Footer.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer-parent">
      <Box sx={{ flexGrow: 1 }}>
        <Container sx={{ paddingY: "88px" }}>
          <Grid container spacing={2}>
            <Grid item md={3} xs={12}>
              <h3 className="footer-title">CONTACT US</h3>
              <p className="footer-title-p">Address</p>
              <p className="addres">17 Downtown St, Victoria, Australia</p>
              <p className="footer-title-p">Email Us</p>
              <p className="addres">
                Info@Drone.Com <br />
                Support@Drone.Com
              </p>
              <p className="footer-title-p">Call Us</p>
              <p className="addres">
                +(10) 123 456 7896 <br />
                +(10) 123 456 7899
              </p>
            </Grid>
            <Grid item md={3} xs={12}>
              <h3 className="footer-title">LATEST NEWS</h3>
              <ul className="footer-lisy-item">
                <li>
                  <a href=""> Become an Affiliate</a>
                </li>
                <li>
                  <a href=""> About Drone</a>
                </li>
                <li>
                  <a href="">Community Meetups</a>
                </li>
                <li>
                  <a href="">Why Buy With Us?</a>
                </li>
                <li>
                  <a href="">Envato Market Licenses</a>
                </li>
                <li>
                  <a href="">Envato Market Terms</a>
                </li>
                <li>
                  <a href="">Our Great Team</a>
                </li>
              </ul>
            </Grid>
            <Grid item md={3} xs={12}>
              <h3 className="footer-title">OUR SERVICES</h3>
              <ul className="footer-lisy-item">
                <li>
                  <a href="">About Us </a>
                </li>
                <li>
                  <a href=""> Brands</a>
                </li>
                <li>
                  <a href="">gift vouchers </a>
                </li>
                <li>
                  <a href="">Site Map</a>
                </li>
                <li>
                  <a href="">Testimonials</a>
                </li>
                <li>
                  <a href="">Our Team</a>
                </li>
                <li>
                  <a href="">Drone Support</a>
                </li>
              </ul>
            </Grid>
            <Grid item md={3} xs={12}>
              <h3 className="footer-title">GET IN TOUCH</h3>
              <input className="form-control" placeholder="NAME" type="text" />
              <input className="form-control" placeholder="EMAIL" type="text" />
              <textarea
                className="footer-textarea"
                placeholder="MESSAGE"
                rows="4"
              ></textarea>
              <button className="footer-button">SEND</button>
            </Grid>
          </Grid>
        </Container>
        <div className="footer-last-section">
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingY: "14px",
              }}
              className="footer-copyright-item"
            >
              <div className="copyright">
                <p>© 2016 ALL RIGHTS RESERVED</p>
              </div>
              <div className="copyright-text">
                <ul>
                  <li>
                    <a href=""></a> HOME
                  </li>
                  <li>
                    <a href=""></a> ABOUT
                  </li>
                  <li>
                    <a href=""></a>SERVICES
                  </li>
                  <li>
                    <a href=""></a>PRIVACY POLICY
                  </li>
                  <li>
                    <a href=""></a>TERMS&CONDITION
                  </li>
                </ul>
              </div>
            </Box>
          </Container>
        </div>
      </Box>
    </div>
  );
};

export default Footer;
