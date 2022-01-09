import React, {Component} from 'react';
import Navbar from "./components/navbar";
import MainPage from "./components/mainpage";
import Benefits from "./components/benefits";
import Overview from './components/overview';
import About from "./components/about";
import Watches from "./components/watches";
import ReviewsSection from './components/reviewsSection';
import "./styles/app.css";

// import {
//   BrowserRouter,
//   Routes, // instead of "Switch"
//   Route,
// } from "react-router-dom";


class App extends Component{

  state={

  }

  render(){
    return (
      <>
        <Navbar/>
        <MainPage/>
        <Benefits/>
        {/* <Overview/> */}
        <About/>
        {/* <Watches/> */}
        <ReviewsSection/>
        
  {/* < BrowserRouter>

    <Routes>
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/mainpage" element={<MainPage />} />
    </Routes>
  </ BrowserRouter> */}
              
      </>
    )
  }
}
export default App;
