import React from 'react';
import { Link } from 'react-router';
import BaseIngredientInput from './BaseIngredientInput';

class First extends React.Component {
	render() {
		return (
			<div className="main-module">
				<h2 className="view-1">1</h2>
				<BaseIngredientInput />
				<ul>
          <li><Link to="Second">Go to view #2</Link></li>
        </ul>
			</div>
		)
	}
};

export default First;