import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import { removeSpaces } from './utils/inputChecks';
import { getRecipes } from './utils/getRecipes';
import './index.css';


export default class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: new URLSearchParams(window.location.search).get('q'),
            isLoaded: false,
            recipeTitles: [],
            recipeIngredients: [],
            recipeInstructions: [],
            recipeImageNames: [],
        };
    }

    componentDidMount() {
        /*
        TO-DO:
        - Input checking: don't allow invalid queries
            -> isValidQuery() function
            -> if (isValidQuery()) { clean it, feed it into API }
        - error handling
        - currently ignoring match scores
        */
        if (this.state.query) {
            const cleanQuery = removeSpaces(this.state.query);
            getRecipes(this.setState.bind(this), cleanQuery);
        }
    }

    render() {
        let resultsSection;

        if (this.state.isLoaded && (this.state.recipeTitles.length > 0)) {
            resultsSection = (
                <Results
                    recipeTitles={this.state.recipeTitles}
                    recipeIngredients={this.state.recipeIngredients}
                    recipeInstructions={this.state.recipeInstructions}
                    recipeImageNames={this.state.recipeImageNames} />
            );
        } else if (this.state.isLoaded && (this.state.recipeTitles.length === 0)) {
            resultsSection = (
                <p id="no-results-message">
                    No results found. Please try a different search.
                </p>
            );
        } else if (this.state.query) { // Query provided, but not yet loaded
            resultsSection = (
                <p id="loading-message">
                    Looking for recipes...
                </p>
            );
        }
            // else {
        //     resultsSection = (
        //         // User didn't provide a query yet/on default home page
        //         <div key="No-response">
        //             <h2>Go ahead and provide a search for me</h2>
        //         </div>
        //     );
        // }

        return (
            <div id="body">
                <SearchBar />
                { resultsSection }
            </div>
        );
    }
}
