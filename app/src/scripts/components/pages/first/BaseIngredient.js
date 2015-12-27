import React from 'react';
import Store from '../../../stores/store';
import BaseIngredientItem from './BaseIngredientItem';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';

function getBaseIngredient(){
	return {
		baseIngredients: Store.getBaseIngredient(),
		currentBaseIngredient: Store.getCurrentBaseIngredient()
	}
}

const BaseIngredient = (props) => {
	let baseIngredients = props.baseIngredients.map( baseIngredient => {
		return <BaseIngredientItem isChosen={ baseIngredient.name === props.currentBaseIngredient.name } key={ baseIngredient.name } baseIngredient={ baseIngredient } />
	});

	return (
		<div className="base-ingredients-group">
			<h2 className="heading-instruction">Please choose a base ingredient below.</h2>
			<div className="base-ingredient-buttons">
				{ baseIngredients } 
			</div>
		</div>
	)
}


export default StoreWatchMixin( BaseIngredient, getBaseIngredient ); 