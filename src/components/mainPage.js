import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/mainpage.css"
const watchImage=require("../assets/carlosEstevexunsplashwatch.jpeg")

class MainPage extends Component {
  state = {};
  render() {
    return (
      <>

        <div class="row ">   
            <img class="img-fluid watchSize" src={watchImage} alt="watch-image" />
        </div>
      
    
      </>
    );
  }
}
export default MainPage;
