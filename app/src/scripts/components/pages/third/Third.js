import React from 'react';
import { Link } from 'react-router';
import Cart from './Cart';
import Recipes from './Recipes';

class Third extends React.Component {
	render() {
		return (
			<div className="main-module">
				<h2 className="heading-instruction">
					Generated recipes:
				</h2>
				<div className="recipes-generated">
					<div className="recipe-generated">
						<a href="#"><img className="recipe-pic" src="../assets/img/5.jpg" />Delicious Chicken Wok!</a>
					</div>			
					<div className="recipe-generated">
						<a href="#"><img className="recipe-pic" src="../assets/img/1.jpg" />Super Awesome Tasty Pie</a>
					</div>			
					<div className="recipe-generated">
						<a href="#"><img className="recipe-pic" src="../assets/img/2.jpg" />Mega Jumbo Cheese Bomb</a>
					</div>			
					<div className="recipe-generated">
						<a href="#"><img className="recipe-pic" src="../assets/img/3.jpg" />Bacon Dream From Heaven</a>
					</div>				
				</div>
				<Cart />
				<Recipes />
				<ul>
					<li className="next-step"><Link to="Second">Go back</Link></li>
        </ul>
			</div>
		)
	}
};

export default Third;