import React from 'react';
import { Link } from 'react-router';
import Cart from './Cart';
import Recipes from './Recipes';

class Third extends React.Component {
	render() {
		return (
			<div className="main-module main-module_step-3">
				<h2 className="heading-instruction">
					Generated recipes:
				</h2>
				<Cart />
				<Recipes />
				<ul>
					<li className="next-step"><Link to="Second">Go back</Link></li>
     		   </ul>
			</div>
		)
	}
};

export default Third;