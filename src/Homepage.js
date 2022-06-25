import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Results from './Results';
// import { removeSpaces } from './utils/inputChecks';


export default class Homepage extends Component {
    /*
    If a constructor method is not present, React will error
    out with a warning, because it prefers stateless functions.
    Stateless class makes class have no benefits over functions.
    */
    constructor(props) {
        super(props);

        // Set state
        this.state = {
            query: new URLSearchParams(window.location.search).get('s'),
            // isLoaded: false,
            // recipeTitles: [],
            // recipeIngredients: [],
            // recipeInstructions: [],
            // recipeImageNames: [],

            // Offline Testing Values
            isLoaded: true,
            recipeTitles: ['TitleOne', 'TitleTwo'],
            recipeIngredients: [['One ing', 'Two ing'], ['Three ing', 'Four ing']],
            recipeInstructions: ['You do one, and two', 'Do three and four'],
            recipeImageNames: ['name-of-image-one', 'other-name-of-image'],
        };
    }

    // Comment out for offline testing
    // componentDidMount() {
    //     /*
    //     TO-DO:
    //     - Input checking: don't allow invalid queries
    //     - error handling: isLoaded the same regardless of error
    //     */
    //     const apiURL = `https://sage-recipes.herokuapp.com/recipes/?ingredients=${
    //         removeSpaces(this.state.query)}`;
    //     fetch(apiURL)
    //         .then(result => result.json())
    //         .then((data) => {
    //             const tmpTitles = [];
    //             const tmpIngredients = [];
    //             const tmpInstructions = [];
    //             const tmpImageNames = [];

    //             for (let i = 0; i < Object.keys(data).length; i += 1) {
    //                 tmpTitles.push(data[i].title);
    //                 tmpIngredients.push(data[i].ingredients);
    //                 tmpInstructions.push(data[i].instructions);
    //                 tmpImageNames.push(data[i].imageName);
    //             }

    //             this.setState({
    //                 isLoaded: true,
    //                 recipeTitles: tmpTitles,
    //                 recipeIngredients: tmpIngredients,
    //                 recipeInstructions: tmpInstructions,
    //                 recipeImageNames: tmpImageNames,
    //             });
    //         },
    //         /*
    //         Note: it's important to handle errors here
    //         instead of a catch() block so that we don't swallow
    //         exceptions from actual bugs in components.
    //         */
    //               (error) => {
    //                   this.setState({
    //                       isLoaded: true,
    //                       error,
    //                   });
    //               },
    //       );
    // }

    render() {
        let resultsSection;
        const isLoaded = this.state.isLoaded;

        if (isLoaded) {
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
