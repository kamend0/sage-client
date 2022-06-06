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

        // // Bind context to the handler function
        this.handler = this.handler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // Set state
        this.state = {
            query: new URLSearchParams(window.location.search).get('s'),
            typedQuery: '',
        };
    }

    /*
    NOTE: React errors silently if parent component has no handler,
    but handler() is passed to child component, AND child component
    uses the handler. Sneaky issue.
    */
    handler(queryState) {
        this.setState({
            query: queryState,
        });
    }

    handleSubmit = (event) => {
        this.setState({ query: event.target.value });
    };

    handleTypedQuery = (event) => {
        this.setState({ typedQuery: event.target.value });
    };

    // iteratequery = () => {
    //     this.setState({
    //         query: this.state.query + 1,
    //     });
    // }

    render() {
        return (
            <div>
                <h1>Query from URL is: { this.state.query }</h1>
                <h1>query is: { this.state.typedQuery }</h1>
                <SearchBar />
                {/* <input onChange={this.handleInput} placeholder="Enter query" />
                <button onClick={this.handleInput}>Submit</button> */}

                {/* <form type="text" onSubmit={this.handleInput}>
                    <button type="submit">submit query</button>
                </form> */}

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="userInput">
                        Query:
                        <input
                            type="text"
                            value={this.state.typedQuery}
                            onChange={this.handleTypedQuery}
                            name="userQuery" />
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                </form>

                {/* This works: */}
                {/* <button onClick={() => this.setState({ query: this.state.query + 1 })}>
                    Working Button
                </button> */}

                {/* This doesn't: */}
                {/* <button onClick={this.iteratequery}>Broken Button</button> */}

                {/* This works now: */}
                {/* <SearchBar handler={this.handler} /> */}

                {/* Getting data from SearchBar: */}
                {/* <SearchBar onClick={this.handler} /> */}
                {/* <SearchBar query={this.state.query} changeQuery={(query) => { this.handler(query); }} /> */}
            </div>
        );
    }
}
