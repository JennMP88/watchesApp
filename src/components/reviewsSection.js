import React, {Component} from "react";
import {reviews} from "../containers/reviewsApi.js";
import "../styles/reviews.css";

class ReviewsSection extends Component {
 constructor(props) {
   super(props) 
      this.state={
      }
 }
  render(){
    return (<>     
    <div class="container mt-5">
    <div class="row align-items-start">
   
        {
          reviews.map((review,i)=>{
           return ( 
            <div let key={i} class="col col-4 p-2 review">
            <div  class="card">
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>{review.review}</p>
                <footer class="blockquote-footer d-flex justify-content-end">{review.name}</footer>
              </blockquote>
            </div>
          </div> 
          </div>
              
            )
          })
        }
    </div>
    </div>
  
    </>)
  }
}
export default ReviewsSection;