// import React, { Component } from 'react';
import React from 'react';

// // eslint-disable-next-line react/prefer-stateless-function
// export default class Results extends Component(props) {
//     constructor(props) {
//         super(props);
//         this.state = {
//             titles: [],
//             ingredients: [],
//             instructions: [],
//             matchScores: [],
//             imageNames: [],
//         }
//     }
//     render() {
//         return (
//             <div>
//                 {/* All objects will have the same number of elements, so single index is OK */}
//                 {Object.keys(recipeTitles).map((t, i) =>
//                     (<p key={recipeTitles[t]}>
//                         Recipe {i}: {recipeTitles[t]}<br />
//                         Ingredients: {recipeIngredients[t].join(', ')}<br />
//                         Instructions: {recipeInstructions[t]}<br />
//                         Image:
//                         <br />
//                         <img
//                             src={`${imageBaseURL + recipeImageNames[t]}.jpg`}
//                             alt={recipeTitles[t]} />
//                         <br />
//                         <br /><br />
//                     </p>))}
//                 </div>
//         );
//     }
// }

const Results = (props) => {
    const imageBaseURL = 'https://sage-recipe-images.s3.us-west-1.amazonaws.com/';

    return (
        <div>
            {/* All objects will have the same number of elements, so single index is OK */}
            {Object.keys(props.recipeTitles).map((t, i) =>
                (<p key={props.recipeTitles[t]}>
                    Recipe {i}: {props.recipeTitles[t]}<br />
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
