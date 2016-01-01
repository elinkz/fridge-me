import React from 'react';
import { Link } from 'react-router';
import BaseIngredient from './BaseIngredient';

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

export default First;