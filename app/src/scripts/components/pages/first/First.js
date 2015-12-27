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
				<BaseIngredient />
				<ul>
          <li className="next-step"><Link to="Second">Next Step</Link></li>
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