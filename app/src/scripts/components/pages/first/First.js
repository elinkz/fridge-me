import React from 'react';
import { Link } from 'react-router';
import BaseIngredient from './BaseIngredient';
import Store from '../../../stores/store';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';

function setProps () {
	return {
		currentBaseIngredient: Store.getCurrentBaseIngredient()
	}
}

class First extends React.Component {
	render() {
		return (
			<div className="main-module">
				<BaseIngredient />
				{ this.props.currentBaseIngredient.name && <ul>
          	<li className="next-step">
          		<Link to="/second">Next Step</Link>
          	</li>
        </ul> }
			</div>
		)
	}
};

export default StoreWatchMixin(First, setProps);