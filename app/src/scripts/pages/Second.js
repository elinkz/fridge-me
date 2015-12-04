import React from 'react';
import { Link } from 'react-router'

class Second extends React.Component {
	render() {
		return (
			<div className="main-module">
				<h2 className="view-2">
					Second View
				</h2>
				<ul>
					<li><Link to="/First">Go back</Link></li>
          <li><Link to="/Third">Third View</Link></li>
        </ul>
			</div>
		)
	}
};

export default Second;