import React from 'react';
import { Link } from 'react-router'

class Third extends React.Component {
	render() {
		return (
			<div className="main-module">
				<h2 className="view-3">
					3
				</h2>
				<ul>
					<li><Link to="/Second">Go back</Link></li>
        </ul>
			</div>
		)
	}
};

export default Third;