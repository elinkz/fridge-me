import React from 'react';
import { Link } from 'react-router';
import Store from '../../../stores/store';
import RecipesItem from '../third/RecipesItem';
import FinalRecipe from './FinalRecipe';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';
import Footer from '../../footer/Footer';

class Four extends React.Component {
	render() {
		return (
			<div className="main-module main-module_step-3">
				<FinalRecipe />
				<ul>
					<li className="next-step"><Link to="Third">Go back</Link></li>
        </ul>
        <Footer step={4}></Footer>
			</div>
		)
	}
};

export default Four;