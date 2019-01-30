import React, { Component } from "react";
import SearchForm from '../SearchForm'; 

const SearchResults = props => (

  <div className = "pictures">
    <ul>
      {props.image.map(image => <li><img src={image}></img></li> )}
    </ul>
  </div>

); 


export default SearchResults;
