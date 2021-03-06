import React from 'react';
import { Link } from 'react-router';
import Store from '../../../stores/store';
import FinalRecipe from './FinalRecipe';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';
import Footer from '../../footer/Footer';

class StepFour extends React.Component {
	render() {
		return (
			<div className="main-module">
				<div className="main-module_content">
					<FinalRecipe />
					<ul>
						<li className="next-step"><Link to="/step-three">Go back</Link></li>
	        </ul>
	      </div>
        <Footer step={4}></Footer>
			</div>
		)
	}
};

export default StepFour;