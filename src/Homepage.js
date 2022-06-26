import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Results from './Results';
import { removeSpaces } from './utils/inputChecks';
import { getRecipes } from './utils/getRecipes';


export default class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: new URLSearchParams(window.location.search).get('s'),
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
        const cleanQuery = removeSpaces(this.state.query);
        getRecipes(this.setState.bind(this), cleanQuery);
    }


    render() {
        let resultsSection;

        if (this.state.isLoaded) {
            resultsSection = (
                <Results
                    recipeTitles={this.state.recipeTitles}
                    recipeIngredients={this.state.recipeIngredients}
                    recipeInstructions={this.state.recipeInstructions}
                    recipeImageNames={this.state.recipeImageNames} />
            );
        } else {
            resultsSection = (
                // User didn't provide a query yet/on default home page
                <div key="No-response">
                    <h2>Go ahead and provide a search for me</h2>
                </div>
            );
        }

        return (
            <div>
                <SearchBar />
                { resultsSection }
            </div>
        );
    }
}
