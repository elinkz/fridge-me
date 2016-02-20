import React from 'react';
import Store from '../../../stores/store';
import CatalogItem from './CatalogItem';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';

function getCart(){
	return {chosenIngredients: Store.getCart()}
}

const Catalog = (props) => {

	let chosenIngredients = props.chosenIngredients.map( (item, i) => {
		if (item.baseIngredient) { 
			return ''; // Do not display baseIngredient 
		} else {
			return <CatalogItem active={!!Store.getItemInCart(item)} key={i} item={ item } />	
		}
	});
	
	return (
		<div className="catalog">
			{ chosenIngredients }
		</div>
	)
}

export default StoreWatchMixin( Catalog, getCart ); 