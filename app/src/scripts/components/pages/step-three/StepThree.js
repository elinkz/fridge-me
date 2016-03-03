import React from 'react';
import { Link } from 'react-router';
import Cart from './Cart';
import Recipes from './Recipes';
import Footer from '../../footer/Footer';

class StepThree extends React.Component {
	render() {
		return (
			<div className="main-module main-module_step-3">
				<div className="main-module_content">
					<h2 className="heading-instruction">
						Generated recipes:
					</h2>
					<Recipes />
					<ul>
						<li className="next-step"><Link to="/step-two">Go back</Link></li>
	     		</ul>
	     	</div>
     		<Footer step={3}></Footer>
			</div>
		)
	}
};

export default StepThree;