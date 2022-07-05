import React from 'react';


const SearchBar = () => (
    <form action="/" method="get" id="search-bar">
        <input
            type="text"
            id="search-bar-box"
            placeholder="Enter your ingredients separated by commas..."
            name="q" />
        <button type="submit" id="search-bar-submit">Search</button>
    </form>
);

export default SearchBar;
