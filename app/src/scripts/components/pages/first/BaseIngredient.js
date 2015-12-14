import React from 'react';
import Store from '../../../stores/store';
import BaseIngredientItem from './BaseIngredientItem';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';

function getBaseIngredient(){
	return {baseIngredients: Store.getBaseIngredient()}
}

const BaseIngredient = (props) => {
	let baseIngredients = props.baseIngredients.map( baseIngredient => {
		return <BaseIngredientItem key={ baseIngredient.name } baseIngredient={ baseIngredient } />
	});
	return (
		<div className="row">
			<h1>Base Ingredients</h1>
			{ baseIngredients } 
			{/*<BaseIngredientItem key={ baseIngredient.name } baseIngredient={ baseIngredient } />*/}
		</div>
	)
}


export default StoreWatchMixin( BaseIngredient, getBaseIngredient ); 