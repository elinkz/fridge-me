import React from 'react';
import { Link } from 'react-router'
import SearchInput from './SearchInput';
import Catalog from './Catalog';

class Second extends React.Component {
	render() {
		return (
			<div className="main-module">
				<h2 className="view-2">
					2
				</h2>
				<SearchInput />
				<Catalog />
				<ul>
					<li><Link to="/">Go back</Link></li>
          <li><Link to="Third">Go to view #3</Link></li>
        </ul>
			</div>
		)
	}
};

export default Second;