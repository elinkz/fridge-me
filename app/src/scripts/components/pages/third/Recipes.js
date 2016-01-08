import React from 'react';
import Store from '../../../stores/store';
import RecipesItem from './RecipesItem';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';

const recipes = () => {
  return { recipes: Store.getRecipes() }
}

const Recipes = ( props ) => {
  var recipes = props.recipes.map( ( recipes, i ) => {
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
            <th>Ingredients</th>
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
