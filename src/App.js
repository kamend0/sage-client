import React, { Component } from 'react';
import Homepage from './Homepage';
import './index.css';

class App extends Component {
    state = { loading: false };

    // TO-DO: Get header title to link to home page
    render() {
        return (
            <div id="all-site">
                <header>
                    <p id="header-title">
                        Sage Recipes
                    </p>
                    <p id="header-subtitle">
                        Find recipes using the ingredients you already have
                    </p>
                </header>
                <Homepage />
            </div>
        );
    }
}

export default App;
