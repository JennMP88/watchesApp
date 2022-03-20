import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "../components/main.js"
import Benefits from "../components/benefits.js"
import About from "../components/about";
import ReviewsSection from "../components/reviewsSection";
import Footer from "./footer";
import ContactForm from "./contact";

class MainPage extends Component {
  // targetRef = React.createRef();
  state = {};

 

  render() {
  
    return (
      <>
          <Main />
          <Benefits/>
          <About/>
          <ReviewsSection />
          <ContactForm/>
          <Footer />
          
      </>
    );
  }
}
export default MainPage;
