import React, { Component } from "react";
import Navbar from "./components/navbar";
import MainPage from "./components/mainPage";
import Benefits from "./components/benefits";
import Overview from "./components/overview";
import About from "./components/about";
import Watches from "./components/watches";
import ReviewsSection from "./components/reviewsSection";
import "./styles/app.css";

import {
  Routes, // instead of "Switch"
  Route,
  BrowserRouter as Router
} from "react-router-dom";

class App extends Component {
  state = {};

  render() {
    return (

      <>
        <Router>
          <Navbar />

          <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/watches" element={<Watches/>} />
          {/* <Overview/> */}

          </Routes>
          
        </Router>
      </>
    );
  }
}
export default App;
