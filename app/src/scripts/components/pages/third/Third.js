import React from 'react';
import { Link } from 'react-router'

class Third extends React.Component {
	render() {
		return (
			<div className="main-module">
				<h2 className="heading-instruction">
					Generated recipes: 
				</h2>
				<ul>
					<li className="next-step"><Link to="Second">Go back</Link></li>
        </ul>
			</div>
		)
	}
};

export default Third;