import React from 'react';


const Results = (props) => {
    const imageBaseURL = 'https://sage-recipe-images.s3.us-west-1.amazonaws.com/';

    return (
        <div>
            {/* All objects will have the same number of elements, so single index is OK */}
            {Object.keys(props.recipeTitles).map((t, i) =>
                (<p key={props.recipeTitles[t]}>
                    Recipe {i + 1}: {props.recipeTitles[t]}<br />
                    Ingredients: {props.recipeIngredients[t].join(', ')}<br />
                    Instructions: {props.recipeInstructions[t]}<br />
                    Image:
                    <br />
                    <img
                        src={`${imageBaseURL + props.recipeImageNames[t]}.jpg`}
                        alt={props.recipeTitles[t]} />
                    <br />
                    <br /><br />
                </p>))}
        </div>
    );
};

export default Results;
