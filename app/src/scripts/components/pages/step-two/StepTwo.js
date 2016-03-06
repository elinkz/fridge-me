import React from 'react';
import { Link } from 'react-router'
import Store from '../../../stores/store';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';
import Catalog from './Catalog';
import SearchInput from './SearchInput';
import BaseIngredient from '../step-one/BaseIngredient';
import Footer from '../../footer/Footer';

function setProps(){
	if (typeof localStorage.baseingredient !== 'undefined'
    && localStorage.baseingredient !== 'undefined') {
	  	var retrievedObject = localStorage.getItem('baseingredient')
	  	retrievedObject = JSON.parse(retrievedObject);

	} else {
		var retrievedObject = Store.getCurrentBaseIngredient();
	}
	return {
		currentBaseIngredient: retrievedObject,
		cart: Store.getCart()
	}
}

class StepTwo extends React.Component {
	render() {
		const additionalIngredients = this.props.cart.filter(ingredient => !ingredient.baseIngredient)
		return (
			<div className="main-module main-module_step-2">
				<div className="main-module_content">
					<div className="selected-base-ingredient">
						<Link className="btn-back" to="/"><i className="fa fa-chevron-left"></i></Link>
						<p>{this.props.currentBaseIngredient.name}</p>
					</div>
					<h2 className="heading-instruction heading-instruction-2">Add some more ingredients! 
						<span className="additional">Type them in below & click add or press enter.</span>
					</h2>
					<SearchInput />
					{ !!additionalIngredients.length && <Catalog /> }
					{ additionalIngredients.length >= 3 && <li className="next-step"><Link to="/step-three">Next Step</Link></li> }
				</div>
				<Footer step={2}></Footer>
			</div>
		)
	}
};

StepTwo.propTypes = {
	currentBaseIngredient: React.PropTypes.object,
	cart: React.PropTypes.array
}

StepTwo.defaultProps = {
	currentBaseIngredient: {},
	cart: []
}

export default StoreWatchMixin( StepTwo, setProps );