import React, { Component } from 'react';

/*
TO-DO: Convert to function, since we now know that we don't
    need state.
*/
// eslint-disable-next-line react/prefer-stateless-function
export default class SearchBar extends Component {
    render() {
        return (
            <form action="/" method="get" id="search-bar">
                <input
                    type="text"
                    id="search-bar-box"
                    placeholder="Enter your ingredients separated by commas..."
                    name="q" />
                <button type="submit" id="search-bar-submit">Search</button>
            </form>
        );
    }
}
