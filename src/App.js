import React, {Component} from 'react';
import Navbar from "./components/navbar";
import MainPage from "./components/mainpage";
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
        {/* <Section/> */}
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
