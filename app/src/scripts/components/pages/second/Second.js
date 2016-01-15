import React from 'react';
import { Link } from 'react-router'
import Store from '../../../stores/store';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';
import Catalog from './Catalog';
import BaseIngredient from '../first/BaseIngredient';

function setProps(){
	return {currentBaseIngredient: Store.getCurrentBaseIngredient()}
}

class Second extends React.Component {
	render() {
		return (
			<div className="main-module">
				<div className="selected-base-ingredient"><p>{this.props.currentBaseIngredient.name}</p></div>
				<h2 className="heading-instruction heading-instruction-2">
					<br />
					Select some more ingredients.
				</h2>
				<Catalog /> 
					<li className="next-step"><Link to="/third">Next Step</Link></li>
				{ /*this.props.currentBaseIngredient.name && <ul>
	          <li className="next-step"><Link to="/third">Next Step</Link></li>
						<li className="next-step"><Link to="/">Go back</Link></li>
        </ul> */}
			</div>
		)
	}
};

Second.propTypes = {
	currentBaseIngredient: React.PropTypes.object
}

export default StoreWatchMixin( Second, setProps );