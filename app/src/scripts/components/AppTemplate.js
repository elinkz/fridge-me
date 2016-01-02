import React from 'react';
import Header from './header/Header';
import Actions from '../actions/actions';

export default class AppTemplate extends React.Component{
	constructor(props){
		super(props)
		Actions.getRecipes()
		Actions.getAvailableIngredients()
	}
  render(){
	  return (
	    <div className="container">
	      <Header></Header>
	      {this.props.children}
	    </div>
	  )
  }
}
