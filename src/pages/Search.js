import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import API from '../utils/APIs';
import Container from '../components/Container';







class Search extends Component {

    state = {
        search: "",
        breeds: [],
        results: [],
        error: ""
    };

    componentDidMount() {
        API.getBaseBreeds()
            .then(res => this.setState({ breeds: res.data.message }))
            .catch(err => console.log(err));
    }


    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.dogSearch(this.state.search)
            .then(res => {
                console.log(this.state.breeds)
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                 
            })

    }

    render() {
        return (
            <div>
                <div>
                    <SearchForm
                        handleFormSubmit={this.handleFormSubmit}
                        breeds={this.state.breeds}
                    />
                </div>
                <div>
                    <ul>
                        {
                            this.state.breeds.map(res => {
                                return <li value={res} key={res}>{res}</li>
                            } )
                        }
                    </ul>
                </div>
            </div>
        );
    }

}


export default Search; 