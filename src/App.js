import React from 'react';
import Homepage from './Homepage';
import './index.css';


const App = () => (
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

export default App;
