import React from 'react';
import Store from '../../../stores/store';
import CatalogItem from './CatalogItem';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';

function getCatalog(){
	return {items: Store.getCatalog()}
}

const Catalog = (props) => {
	let items = props.items.map( item => {
		return <CatalogItem key={ item.id } item={ item } />
	});
	return (
		<div className="row">
			{ items }
		</div>
	)
}

export default StoreWatchMixin( Catalog, getCatalog ); 