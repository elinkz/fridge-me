import React from 'react';
import Store from '../../../stores/store';
import RecipesItem from './RecipesItem';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';

const recipes = () => {
  return { recipes: Store.getRecipes(), cart: Store.getCart(), baseingredient: Store.getCurrentBaseIngredient() }
}

const Recipes = ( props ) => {
  var cartIds = props.cart.map(item => item.ingredientId) // Ex: [11, 23, 1]
  // this baseingredient-id must be in the recipes ingredient array!!
  var baseIngredient = props.baseingredient.ingredientId;
  console.log('id:',baseIngredient);
  var recipes = props.recipes
    .filter(recipe => ( // Run filter function on all recipes
      recipe.ingredients.some(ingredient => ( // Check if reciepe contains any of the chosen ingredients
        cartIds.indexOf(ingredient.ingredientId) >= 0) // Ingredient check
      )
    )) // Now we have a list of reciepes which contain some of the chosen ingredients
    .map( ( recipes, i ) => {
      return (
        <RecipesItem
          key={i}
          recipe={recipes}/>
        )
    } );
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Recipe</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {recipes}
        </tbody>
      </table>
    </div>
  );
}

export default StoreWatchMixin(Recipes,recipes);
