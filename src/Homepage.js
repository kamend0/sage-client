import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { removeSpaces } from './utils/inputChecks';

// Child-Parent Communication SO:
// https://stackoverflow.com/questions/35537229/how-can-i-update-the-parents-state-in-react

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
            isLoaded: false,
            recipeTitles: [],
            recipeIngredients: [],
            recipeInstructions: [],
        };
    }

    componentDidMount() {
        /*
        TO-DO:
        - Input checking: don't allow invalid queries
        */
        const apiURL = `https://mint-green-recipes.herokuapp.com/recipes/?ingredients=${
            removeSpaces(this.state.query)}`;
        fetch(apiURL)
            .then(result => result.json())
            .then((data) => {
                const tmpTitles = [];
                const tmpIngredients = [];
                const tmpInstructions = [];

                for (let i = 0; i < Object.keys(data).length; i += 1) {
                    tmpTitles.push(data[i].title);
                    tmpIngredients.push(data[i].ingredients);
                    tmpInstructions.push(data[i].instructions);
                }

                this.setState({
                    isLoaded: true,
                    recipeTitles: tmpTitles,
                    recipeIngredients: tmpIngredients,
                    recipeInstructions: tmpInstructions,
                });
            },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
                  (error) => {
                      this.setState({
                          isLoaded: true,
                          error,
                      });
                  },
          );
    }

    render() {
        let queryInfo;
        const isLoaded = this.state.isLoaded;

        // Data from API
        const recipeTitles = this.state.recipeTitles;
        const recipeIngredients = this.state.recipeIngredients;
        const recipeInstructions = this.state.recipeInstructions;

        if (isLoaded) {
            queryInfo = (
                <div>
                    {/* All objects will have the same number of entries, so single index is OK */}
                    {Object.keys(recipeTitles).map((t, i) =>
                        (<p key={recipeTitles[t]}>
                            Recipe {i}: {recipeTitles[t]}<br />
                            Ingredients: {recipeIngredients[t].join(', ')}<br />
                            Instructions: {recipeInstructions[t]}<br />
                            <br /><br />
                        </p>))}
                </div>);
        } else {
            queryInfo = (
                // User didn't provide a query yet/on default home page
                <div key="No-response">
                    <h2>Go ahead and provide a search for me</h2>
                </div>
            );
        }

        return (
            <div>
                <SearchBar />
                { queryInfo }
            </div>
        );
    }
}
