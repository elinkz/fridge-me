import React from 'react';
import Store from '../../../stores/store';
import BaseIngredientItem from './BaseIngredientItem';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';

function getStoreVals(){
	return {
		baseIngredients: Store.getBaseIngredients(),
		currentBaseIngredient: Store.getCurrentBaseIngredient()
	}
}

const BaseIngredient = (props) => {
	let baseIngredients = props.baseIngredients.map( baseIngredient => {
		return <BaseIngredientItem isChosen={ baseIngredient.name === props.currentBaseIngredient.name } key={ baseIngredient.name } baseIngredient={ baseIngredient } />
	});

	return (
		<div className="base-ingredients-group">
			<h2 className="heading-instruction heading-instruction-pre">Hungry?</h2>
			<h2 className="heading-instruction"> Let's figure something out together.
				<span className="additional"> Start by choosing a base ingredient below.</span>
			</h2>
			<div className="base-ingredient-buttons">
				<button onClick={props.onClick} className='btn-base-ingredient'> Chicken </button>
				<button onClick={props.onClick} className='btn-base-ingredient'> Vego </button>
				<button onClick={props.onClick} className='btn-base-ingredient'> Beef </button>
				<button onClick={props.onClick} className='btn-base-ingredient'> Fish </button>
				{ baseIngredients } 
			</div>
		</div>
	)
}

export default StoreWatchMixin( BaseIngredient, getStoreVals ); 