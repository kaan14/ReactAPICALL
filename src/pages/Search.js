import React, {Component} from 'react'; 
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults' 
import Container from "../components/Container"; 
import SearchPerson from '../utils/APIs'; 






class Search extends Component {

    render(){
        return(
            <SearchForm/>
        ); 
    }

}


export default Search; 