import React from 'react';
import { Link } from 'react-router';
import Store from '../../../stores/store';
import RecipesItem from '../third/RecipesItem';
import FinalRecipe from './FinalRecipe';
import StoreWatchMixin from '../../../mixins/StoreWatchMixin';

class Four extends React.Component {
	render() {
		return (
			<div className="main-module main-module_step-3">
				<FinalRecipe />
				<ul>
					<li className="next-step"><Link to="Third">Go back</Link></li>
        </ul>
			</div>
		)
	}
};

export default Four;