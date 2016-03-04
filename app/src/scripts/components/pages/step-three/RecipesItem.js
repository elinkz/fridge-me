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
		<div className='generated-recipe'>
			<Link to="/step-four" onClick={handleClick} params={props.recipe}>
				<div className="generated-recipe_info">
					<span className="generated-recipe_title">{props.recipe.title}</span><br />
					<span className="generated-recipe_desc">{props.recipe.description}</span>
				</div>
				<span className="generated-recipe_img"><img src={"../assets/img/" + props.recipe.imagePath} /></span>
		  </Link>
		</div>
	)
}
