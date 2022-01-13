import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "../components/main.js"
import Benefits from "../components/benefits.js"
import About from "../components/about";
import ReviewsSection from "../components/reviewsSection";
import Footer from "./footer";

class MainPage extends Component {
  state = {};
  render() {
    return (
      <>
          <Main />
          <Benefits/>
          <About/>
          <ReviewsSection />
          <Footer />


      </>
    );
  }
}
export default MainPage;
