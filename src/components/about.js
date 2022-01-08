import {React} from "react";
import "../styles/about.css";
const aboutImage=require("../assets/ruthson-zimmerman-hDANeGXvWRw-unsplash.jpg")

const About=()=>{
  return (
    <>
      <div class="container">
        <div class="row mt-5">
        <div class="col col-6">
          <img class="img-fluid image-about"  src={aboutImage} alt="about-image"/>
        </div>

          <div class="col col-6 aboutourwatches gx-5 p-5">
            <h1>Kairos</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
          </div>
 
        </div>
      </div>
    </>
  )
}
export default About;