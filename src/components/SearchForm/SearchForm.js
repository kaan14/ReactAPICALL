import React from 'react'; 
import './SearchForm.css'; 


const SearchForm = props => (

    <form className="search">
    <div className="form-group">
        <label>Search</label>
        <input 
            value={props.search}
            onChange={props.Function}
            placeholder="search for any time of a person"
            id="personType"  
            className="form-control"      
        />
        {/* <datalist id="personTypes">
        {props.types.map(type=><option value={type} key={type}/>)}
        </datalist> */}

        <button onClick={props.Functions} type="submit" className="btn">Search</button>
        </div>
    </form>

); 

export default SearchForm; 