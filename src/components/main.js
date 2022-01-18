import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/mainpage.css"
const watchImage=require("../assets/carlosEstevexunsplashwatch.jpeg")
const watchImage2=require("../assets/shahrukh-rehman-05IxAEjVNl0-unsplash.jpg")

class Main extends Component {
  state = {};
  render() {
    return (
      <>
<div className="row">  
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div className="carousel-inner watchSize">

    <div className="carousel-item active ">
      <img src={watchImage} className="d-block w-100 img-fluid watchImage" alt="..."/>
      <div className="carousel-caption d-none d-md-block subcaps">
        <h5>Kairos</h5>
        <p>Feel the first class experience</p>
      </div>
    </div>

    <div className="carousel-item ">
      <img src={watchImage2} className="d-block w-100 img-fluid watchImage" alt="..."/>
      <div className="carousel-caption d-none d-md-block mt-4">
        
      </div>
    </div>

   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>



{/* benefits */}

 
    
      </>
    );
  }
}
export default Main;