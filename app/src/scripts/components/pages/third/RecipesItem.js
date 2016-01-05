import React from 'react';
import Actions from '../../../actions/actions';
import Store from '../../../stores/store';

export default (props) => {

	let ingredients = [];
	for(let i = 0; i < props.recipe.ingredients.length; i++) {
		ingredients.push('ingredient:',props.recipe.ingredients[i].ingredientId);
	}
	console.log(ingredients);

	return (
		<tr>
      <td>{props.recipe.title}</td>
      <td>{props.recipe.description}</td>
  	</tr>
	)
}
