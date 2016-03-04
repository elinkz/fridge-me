import React from 'react';
import Store from '../../../stores/store';
import RecipesItem from './RecipesItem';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';

const recipes = () => {
  return { recipes: Store.getRecipes(), cart: Store.getCart(), baseingredient: Store.getCurrentBaseIngredient() }
}

const Recipes = ( props ) => {
  var cartIds = props.cart.map(item => item.ingredientId)
  cartIds.shift(); // Ex: [11, 23, 1]
  console.log('shift', cartIds);
  var baseIngredient = props.baseingredient.ingredientId;
  console.log('baseingredient-id:',baseIngredient);
  var recipes = props.recipes.filter(recipe => ( // Run filter function on all recipes
      recipe.ingredients.some(ingredient => ( // Check if recipe contains any of the chosen ingredients
        ingredient.ingredientId === baseIngredient )) && recipe.ingredients.some(ingredient => (cartIds.indexOf(ingredient.ingredientId) !== -1)) // Ingredient check
      )
    ) // Now we have a list of reciepes which contain some of the chosen ingredients
    .map( ( recipes, i ) => {
      return (
        <RecipesItem
          key={i}
          recipe={recipes}/>
        )
    } );
  return (
    <div>
     {recipes}  
    </div>
  );
}

export default StoreWatchMixin(Recipes,recipes);
