import React from 'react'; 
import './SearchForm.css'; 


const SearchForm = props => (
    <div>
        <div className="jumbotron">
            <h1>We 'll find your soulmate</h1>
            <p>Search by Name</p>
        </div>
    <form className="search">
    <div className="form-group">
        <label>Search</label>
        <input 
            value={props.search}
            onChange={props.Function}
            placeholder="search for any time of a person"
            id="personType"  
            className="form-control form-control-lg"      
        />
        {/* <datalist id="personTypes">
        {props.types.map(type=><option value={type} key={type}/>)}
        </datalist> */}

        <button onClick={props.Functions} type="submit" className ="btn btn-success">Search</button>
        </div>
    </form>

    </div>

); 

export default SearchForm; 