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
			<div>
				<span><Link to="/step-four" onClick={handleClick} params={props.recipe}>{props.recipe.title}</Link></span>
				<span>{props.recipe.description}</span>
				<span>{props.recipe.imagePath}</span>
		  </div>
	)
}
