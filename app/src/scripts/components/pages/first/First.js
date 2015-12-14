import React from 'react';
import { Link } from 'react-router';
import Store from '../../../stores/store';
import BaseIngredient from './BaseIngredient';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';

function setProps(){
	return {currentBaseIngredient: Store.getCurrentBaseIngredient()}
}

class First extends React.Component {
	render() {
		return (
			<div className="main-module">
				<h2 className="view-1">{this.props.currentBaseIngredient.name}</h2>
					<BaseIngredient />
				<ul>
          <li><Link to="Second">Go to view #2</Link></li>
        </ul>
			</div>
		)
	}
};

First.propTypes = {
	currentBaseIngredient: React.PropTypes.object
}

First.defaultProps = {
	currentBaseIngredient: {}
}

export default StoreWatchMixin( First, setProps ); 