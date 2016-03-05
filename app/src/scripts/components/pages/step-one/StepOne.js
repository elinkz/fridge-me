import React from 'react';
import { Link } from 'react-router';
import BaseIngredient from './BaseIngredient';
import Store from '../../../stores/store';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';
import Footer from '../../footer/Footer';

/*if(localStorage.baseingredient !== 'undefined' ) {
	var retrievedObject = localStorage.getItem('baseingredient')
}*/

function setProps () {
	return {
		//currentBaseIngredient: retrievedObject !== '' ? JSON.parse(retrievedObject) : Store.getCurrentBaseIngredient(),
		currentBaseIngredient: Store.getCurrentBaseIngredient()
	}
}

class StepOne extends React.Component {
	render() {
		return (
			<div className="main-module">
				<div className="main-module_content main-module_content-1">
					<BaseIngredient />
					{ this.props.currentBaseIngredient.name && <ul>
	          	<li className="next-step">
	          		<Link to="/step-two">Next Step</Link>
	          	</li>
	        </ul> }
	       </div>
        <Footer step={1}></Footer>
			</div>
		)
	}
};

export default StoreWatchMixin(StepOne, setProps);