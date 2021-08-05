import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '6bQKQCwHJe71A7eIknhlGavmle9OiuJn';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: '',
        reviews: []
    }
//going to need a handleSubmit, this is going to setState any results towards the searchTerm, invoke a fetch request

    handleChange = (e) => {
        return (
            this.setState({
            searchTerm: e.target.value
        })
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch(URL)
        .then(resp => resp.json())
        .then(searchData => this.setState({searchData}))

    }

    render() {
        //create a form that has a submit button, and an input box,  InputBox should has an onChange event, 
        return (
        <div className="searchable-movie-reviews" >
            <form onSubmit={this.handleSubmit}>
            <input type='text' onChange={this.handleChange}></input>
            <button type='submit'>Search</button>
            </form>
            <MovieReviews reviews={this.state.reviews} />
        </div>
        )
    }

}

export default SearchableMovieReviewsContainer