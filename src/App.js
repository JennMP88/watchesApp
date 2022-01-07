import React, {Component} from 'react';
import Navbar from "./components/navbar.js";
import {Route,  Switch} from "react-router-dom";

class App extends Component{

  state={

  }

  render(){
    return (
      <>
    <div className="App">
      <header className="App-header">  
      <Navbar/>
      </header>
    </div>
      </>
    )
  }
}
export default App;
