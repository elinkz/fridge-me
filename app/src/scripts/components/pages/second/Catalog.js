import React from 'react';
import Store from '../../../stores/store';
import CatalogItem from './CatalogItem';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';

function getCatalog(){
	return {items: Store.getCommonIngredients()}
}

const Catalog = (props) => {
	let items = props.items.map( (item, i) => {
		return <CatalogItem key={i} item={ item } />
	});
	return (
		<div className="row">
			{ items }
		</div>
	)
}

export default StoreWatchMixin( Catalog, getCatalog ); 