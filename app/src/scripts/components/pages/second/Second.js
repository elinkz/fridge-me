import React from 'react';
import { Link } from 'react-router'
import SearchInput from './SearchInput';
import Catalog from './Catalog';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';
import BaseIngredient from '../first/BaseIngredient';
import Store from '../../../stores/store';

function setProps(){
	return {currentBaseIngredient: Store.getCurrentBaseIngredient()}
}

class Second extends React.Component {
	render() {
		return (
			<div className="main-module">
				<h2 className="view-1">{this.props.currentBaseIngredient.name}</h2>
				<SearchInput />
				<Catalog />
				<ul>
					<li><Link to="/">Go back</Link></li>
          <li><Link to="Third">Go to view #3</Link></li>
        </ul>
			</div>
		)
	}
};

export default StoreWatchMixin( Second, setProps ); 