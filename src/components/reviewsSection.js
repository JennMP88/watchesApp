import React, {Component} from "react";
import {reviews} from "../containers/reviewsApi.js";

class ReviewsSection extends Component {
 constructor(props) {
   super(props) 
      this.state={
      }
 }
  render(){
    return (<> 
    <div class="container">
    <div class="row align-items-start">
        {
          reviews.map((review,i)=>{
           return ( 
           
           <div let key={i} class="col col-4 p-2">
            {review.review} 
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