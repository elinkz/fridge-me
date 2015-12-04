import React from 'react';
import { Link } from 'react-router'
import InputForm from '../components/InputForm';

class First extends React.Component {
	render() {
		return (
			<div className="main-module">
				<h2 className="view-1">First View</h2>
				<InputForm />
				<ul>
          <li><Link to="/Second">Second View</Link></li>
        </ul>
			</div>
		)
	}
};

export default First;