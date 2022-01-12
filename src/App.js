import React, {Component} from 'react';
import Navbar from "./components/navbar";
import MainPage from "./components/mainpage";
import Benefits from "./components/benefits";
import Overview from './components/overview';
import About from "./components/about";
import Watches from "./components/watches";
import ReviewsSection from './components/reviewsSection';
import "./styles/app.css";


class App extends Component{

  state={

  }

  render(){
    return (
      <>
        {/* <Navbar/>
        <MainPage/>
        <Benefits/>
        <About/>
        <ReviewsSection/> */}
         <Watches/>     
      </>
    )
  }
}
export default App;
