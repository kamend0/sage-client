import React, { Component } from 'react';
import SearchBar from './SearchBar';

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
        };
    }

    render() {
        // First, check if anything has been entered
        // Then render based on presence of input
        // TODO: input checking should probably go here
        const currentQuery = this.state.query;
        let queryInfo;
        if (currentQuery) {
            // User gave a query; check it, call API, etc.
            // When Results component exists, this could be: queryInfo = <Results />
            queryInfo = (
                <div>
                    <h2>You searched: {currentQuery}</h2>
                    <h2>The type of the query: {typeof currentQuery}</h2>
                    <h2>Length of query provided: {currentQuery.length}</h2>
                </div>
            );
        } else {
            queryInfo = (
                // User didn't provide a query yet/on default home page
                <div>
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
