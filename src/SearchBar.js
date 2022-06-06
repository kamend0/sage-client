import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class SearchBar extends Component {
    render() {
        return (
            <form action="/" method="get">
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search recipes"
                    name="s" />
                <button type="submit">Search</button>
            </form>

        );
    }
}
