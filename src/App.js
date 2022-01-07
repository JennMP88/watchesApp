import React, {Component} from 'react';
import Navbar from "./components/navbar.js";
import MainPage from "./components/mainPage.js";
import "./styles/app.css";
// import {Route,  Switch} from "react-router-dom";
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
    {/* <div className="App"> */}
      {/* <header className="App-header">   */}
      {/* <browserRouter>   */}
      {/* <Route path="/navbar" exact strict component={Navbar}/>
      <Route path="/mainPage" exact strict component={MainPage}/> */}
       <Navbar/>
      {/*<MainPage/> */}
      {/* </browserRouter> */}
      {/* </header> */}
    {/* </div> */}
      </>
    )
  }
}
export default App;
