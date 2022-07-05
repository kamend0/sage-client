import React from 'react';


const Results = (props) => {
    const imageBaseURL = 'https://sage-recipe-images.s3.us-west-1.amazonaws.com/';

    return (
        <div id="all-results">
            {/* All objects will have the same number of elements, so single index is OK */}
            {Object.keys(props.recipeTitles).map((t, i) =>
                (<div id="result">
                    <div id="recipe-image">
                        <img
                            src={`${imageBaseURL + props.recipeImageNames[t]}.jpg`}
                            alt={props.recipeTitles[t]} />
                    </div>
                    <div key={props.recipeTitles[t]} id="title">
                        Recipe {i + 1}: {props.recipeTitles[t]}
                    </div>
                    <div id="ingredients">
                        Ingredients: {props.recipeIngredients[t].join(', ')}
                    </div>
                    <div id="instructions">
                        Instructions: {props.recipeInstructions[t]}
                    </div>
                </div>))}
        </div>);
};

export default Results;
