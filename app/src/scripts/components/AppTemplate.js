import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Actions from '../actions/actions';

export default class AppTemplate extends React.Component{
  constructor(props){
    super(props)
    Actions.getRecipes()
    Actions.getAvailableIngredients()

    this.syncWithStorage()
  }

  syncWithStorage() {
    const storedBaseingredient = JSON.parse(localStorage.getItem('baseingredient'));
    if (storedBaseingredient) {
      Actions.setBaseIngredient(storedBaseingredient)
    }
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
