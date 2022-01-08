import React, {Component} from 'react';
import Navbar from "./components/navbar";
import MainPage from "./components/mainpage";
import Overview from './components/overview';
import About from "./components/about";
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
        {/* <Overview/> */}
        <About/>
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
