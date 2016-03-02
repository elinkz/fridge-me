import React from 'react';
import Actions from '../../../actions/actions';
import Store from '../../../stores/store';
import { Link } from 'react-router';

export default (props) => {

	let ingredients = [];
	for(let i = 0; i < props.recipe.ingredients.length; i++) {
		ingredients.push(props.recipe.ingredients[i].ingredientId);
	}

	function handleClick() {
		Actions.setFinalRecipe( this.params );
	}

	return (
			<tr>
				<td><Link to="Fourth" onClick={handleClick} params={props.recipe}>{props.recipe.title}</Link></td>
				<td>{props.recipe.description}</td>
		  </tr>
	)
}
