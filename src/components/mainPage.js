import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const watchImage=require("../assets/carlosEstevexunsplashwatch.jpeg")

class MainPage extends Component {
  state = {};
  render() {
    return (
      <>

        {/* <div className="container-fluid"> */}
        <div class="row">
           
            <img class="img-fluid" src={watchImage} alt="watch-image" />
        
        </div>
        {/* </div> */}
      </>
    );
  }
}
export default MainPage;
