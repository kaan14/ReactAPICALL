import React from "react";
import "./SearchResults.css";

const SearchResults = props => (
  <div>
    <div className="cart">
      <img className="cart-image-top" src={props.image} />
      <h5 className=" " >{props.name} {props.lastname}</h5>
      <p className=" " >{props.age}</p>
      <p className=" " >{props.occupation}</p> 
    </div>
  </div>
);
export default SearchResults;
