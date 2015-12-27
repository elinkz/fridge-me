import React from 'react';
import { Link } from 'react-router'
import SearchInput from './SearchInput';
import Store from '../../../stores/store';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';
import Catalog from './Catalog';

function setProps(){
	return {currentBaseIngredient: Store.getCurrentBaseIngredient()}
}

class Second extends React.Component {
	render() {
		return (
			<div className="main-module">
				<h2 className="heading-instruction">
					Base ingredient: {this.props.currentBaseIngredient.name}
					<br />
					Select more ingredients.
				</h2>
				<SearchInput />
				<Catalog />
				<ul>
          <li className="next-step"><Link to="Third">Next Step</Link></li>
					<li className="next-step"><Link to="/">Go back</Link></li>
        </ul>
			</div>
		)
	}
};

Second.propTypes = {
	currentBaseIngredient: React.PropTypes.object
}

Second.defaultProps = {
	currentBaseIngredient: {}
}

export default StoreWatchMixin( Second, setProps ); 

