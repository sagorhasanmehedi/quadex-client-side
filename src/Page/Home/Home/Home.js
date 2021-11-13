import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Introduction from "../Introduction/Introduction";
import Review from "../Rewiew/Review";
import Products from "./Products/Products";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Quadex </title>
      </Helmet>
      <Banner />
      <Introduction />
      <Products />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
