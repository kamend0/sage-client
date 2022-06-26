export function getRecipes(setState, cleanIngredientsQuery) {
    const apiURL = `https://sage-recipes.herokuapp.com/recipes/?ingredients=${
        cleanIngredientsQuery}`;

    const tmpTitles = [];
    const tmpIngredients = [];
    const tmpInstructions = [];
    const tmpImageNames = [];

    fetch(apiURL)
        .then(result => result.json())
        .then((data) => {
            for (let i = 0; i < Object.keys(data).length; i += 1) {
                tmpTitles.push(data[i].title);
                tmpIngredients.push(data[i].ingredients);
                tmpInstructions.push(data[i].instructions);
                tmpImageNames.push(data[i].imageName);
            }

            setState({
                isLoaded: true,
                recipeTitles: tmpTitles,
                recipeIngredients: tmpIngredients,
                recipeInstructions: tmpInstructions,
                recipeImageNames: tmpImageNames,
            });
        },
              error => // Research if this is the right way to handle errors
              setState({
                  isLoaded: true,
                  error,
              }),
        );
}
